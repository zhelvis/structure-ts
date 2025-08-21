import { describe, expect, it } from "bun:test";
import {
	type Action,
	ActionType,
	applyDiff,
	computeDiff,
	type Diff,
	revertDiff,
} from "./diff";

describe("Diff utils", () => {
	const testSymbol = Symbol("test");
	const testSymbol2 = Symbol("test2");

	const table: [oldValue: unknown, newValue: unknown, diff: Diff][] = [
		[
			true,
			false,
			[{ type: ActionType.CHANGE, path: [], from: true, to: false }],
		],
		[1, 2, [{ type: ActionType.CHANGE, path: [], from: 1, to: 2 }]],
		[
			BigInt(1),
			BigInt(2),
			[{ type: ActionType.CHANGE, path: [], from: BigInt(1), to: BigInt(2) }],
		],
		[
			testSymbol,
			testSymbol2,
			[
				{
					type: ActionType.CHANGE,
					path: [],
					from: testSymbol,
					to: testSymbol2,
				},
			],
		],
		[
			"test",
			"test2",
			[{ type: ActionType.CHANGE, path: [], from: "test", to: "test2" }],
		],
		[null, 1, [{ type: ActionType.CHANGE, path: [], from: null, to: 1 }]],
		[undefined, 1, [{ type: ActionType.ADD, path: [], value: 1 }]],
		[1, undefined, [{ type: ActionType.REMOVE, path: [], value: 1 }]],
		[
			{ a: 1, b: 2, c: { d: 3 }, e: 4 },
			{ a: 1, b: 3, c: { d: 4 }, f: 4 },
			[
				{ type: ActionType.CHANGE, path: ["b"], from: 2, to: 3 },
				{ type: ActionType.CHANGE, path: ["c", "d"], from: 3, to: 4 },
				{ type: ActionType.ADD, path: ["f"], value: 4 },
				{ type: ActionType.REMOVE, path: ["e"], value: 4 },
			],
		],
		[
			[1, 2, 3],
			[1, 4, 3, 5],
			[
				{ type: ActionType.CHANGE, path: [1], from: 2, to: 4 },
				{ type: ActionType.ADD, path: [3], value: 5 },
			],
		],
		[
			[1, 4, 3, 5],
			[1, 4, 3],
			[{ type: ActionType.REMOVE, path: [3], value: 5 }],
		],
		[
			{
				a: [
					{
						b: 1,
						c: [2, 3],
					},
				],
			},
			{
				a: [
					{
						b: 1,
						c: [2, 4],
					},
				],
			},
			[{ type: ActionType.CHANGE, path: ["a", 0, "c", 1], from: 3, to: 4 }],
		],
	];

	describe("computeDiff", () => {
		it.each(table)(
			"should detect changes between values",
			(oldValue, newValue, diff) => {
				expect(computeDiff(oldValue, newValue)).toEqual(diff);
			},
		);

		it.each([
			[true, true],
			[1, 1],
			[BigInt(1), BigInt(1)],
			[testSymbol, testSymbol],
			["test", "test"],
			[null, null],
			[undefined, undefined],
			[{ a: 1 }, { a: 1 }],
			[
				[1, 2, 3],
				[1, 2, 3],
			],
		])("should return undefined for equal values", (a, b) => {
			const result = computeDiff(a, b);
			expect(result).toBeUndefined();
		});

		it("should handle circular references", () => {
			const obj1 = { a: 1 };
			(obj1 as unknown as { self: unknown }).self = obj1; // Circular reference

			const obj2 = { a: 2 };
			(obj2 as unknown as { self: unknown }).self = obj2; // Circular reference

			expect(computeDiff(obj1, obj2)).toEqual([
				{ type: ActionType.CHANGE, path: ["a"], from: 1, to: 2 },
			]);
		});
	});

	describe("applyDiff", () => {
		it.each(table)("should apply changes", (oldValue, newValue, diff) => {
			expect(applyDiff(oldValue, diff)).toEqual(newValue);
		});

		it("should throw error for invalid action type", () => {
			expect(() =>
				applyDiff({}, [
					{ type: "INVALID_ACTION", path: [], value: 1 } as unknown as Action,
				]),
			).toThrow(Error);
		});

		it.each<[oldValue: unknown, diff: Diff]>([
			[{}, [{ type: ActionType.ADD, path: ["a", "b"], value: 1 }]],
			[{ a: null }, [{ type: ActionType.ADD, path: ["a", "b"], value: 1 }]],
			[{ a: 1 }, [{ type: ActionType.ADD, path: ["a", "b"], value: 1 }]],
			[
				{ a: [{ b: 2 }] },
				[{ type: ActionType.CHANGE, path: ["a", "0", "b"], from: 2, to: 3 }],
			],
		])("should throw error for invalid path", (oldValue, diff) => {
			expect(() => applyDiff(oldValue, diff)).toThrow(Error);
		});

		it.each<[Diff]>([
			[
				[
					{
						type: ActionType.ADD,
						path: ["__proto__", "polluted"],
						value: true,
					},
				],
			],
			[
				[
					{
						type: ActionType.ADD,
						path: ["constructor"],
						value: { polluted: true },
					},
				],
			],
			[
				[
					{
						type: ActionType.ADD,
						path: ["prototype"],
						value: { polluted: true },
					},
				],
			],
		])("should prevent prototype pollution", (diff) => {
			const target = Object.create(Object.prototype);
			// const result = applyDiff(target, diff);

			expect(() => applyDiff(target, diff)).toThrow(Error);

			// expect(() => applyDiff(target, diff)).toThrow(Error);
			// expect((result as { polluted: true }).polluted).toBeUndefined();
		});
	});

	describe("revertDiff", () => {
		it.each(table)("should revert changes", (oldValue, newValue, diff) => {
			expect(revertDiff(newValue, diff)).toEqual(oldValue);
		});

		it("should throw error for invalid action type", () => {
			expect(() =>
				revertDiff({}, [
					{ type: "INVALID_ACTION", path: [], value: 1 } as unknown as Action,
				]),
			).toThrow(Error);
		});

		it.each<[Diff]>([
			[
				[
					{
						type: ActionType.REMOVE,
						path: ["__proto__", "polluted"],
						value: true,
					},
				],
			],
			[
				[
					{
						type: ActionType.REMOVE,
						path: ["constructor"],
						value: { polluted: true },
					},
				],
			],
			[
				[
					{
						type: ActionType.REMOVE,
						path: ["prototype"],
						value: { polluted: true },
					},
				],
			],
		])("should prevent prototype pollution", (diff) => {
			const target = Object.create(Object.prototype);

			expect(() => applyDiff(target, diff)).toThrow(Error);

			// const result = revertDiff(target, diff);
			// expect((result as { polluted: true }).polluted).toBeUndefined();
		});
	});
});
