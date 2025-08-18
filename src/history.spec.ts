import { describe, expect, it } from "bun:test";
import { History } from "./history";

describe("History", () => {
	describe("capacity", () => {
		it("should return the capacity of the history", () => {
			const history = new History(5);
			expect(history.capacity).toBe(5);
		});

		it("should throw error on capacity change", () => {
			const history = new History(5);
			expect(() => {
				(history as { capacity: number }).capacity = 10;
			}).toThrow(Error);
		});
	});

	describe("size", () => {
		it("should return the current size of the history", () => {
			const history = new History(5, [1, 2, 3]);
			expect(history.size).toBe(3);
		});

		it("should throw error on size change", () => {
			const history = new History(5);
			expect(() => {
				(history as { size: number }).size = 10;
			}).toThrow(Error);
		});
	});

	describe("constructor", () => {
		it("should create instance of History", () => {
			const history = new History<number>(5);
			expect(history).toBeInstanceOf(History);
		});

		it("should initialize with initial position", () => {
			const history = new History(5, [1, 2, 3], -2);
			expect(history.current()).toBe(2);
			expect(history.redo()).toBe(3);
		});

		it("should throw error on invalid current position", () => {
			expect(() => new History(5, [1, 2, 3], -4)).toThrow(RangeError);
			expect(() => new History(5, [1, 2, 3], 0)).toThrow(RangeError);
		});
	});

	describe("current", () => {
		it("should return the current item", () => {
			const history = new History(5, [1, 2, 3]);
			expect(history.current()).toBe(3);
		});

		it("should return undefined if history is empty", () => {
			const history = new History(5);
			expect(history.current()).toBeUndefined();
		});
	});

	describe("undo", () => {
		it("should restore the previous item", () => {
			const history = new History(5, [1, 2, 3]);
			expect(history.undo()).toBe(2);
			expect(history.current()).toBe(2);
			expect(history.undo()).toBe(1);
			expect(history.current()).toBe(1);
		});

		it("should return undefined if there is no previous item", () => {
			const history = new History(5, [1]);
			expect(history.undo()).toBeUndefined();
		});
	});

	describe("redo", () => {
		it("should restore the next item", () => {
			const history = new History(5, [1, 2, 3]);
			history.undo(); // Move to 2
			expect(history.redo()).toBe(3);
			expect(history.current()).toBe(3);
		});

		it("should return undefined if there is no next item", () => {
			const history = new History(5, [1]);
			expect(history.redo()).toBeUndefined();
		});
	});

	describe("push", () => {
		it("should add items to the history", () => {
			const history = new History(5, [1, 2]);
			expect(history.push(3, 4)).toBe(4);
			expect(history.current()).toBe(4);
		});

		it("should delete redo history when pushing new items", () => {
			const history = new History(5, [1, 2, 3]);
			history.undo(); // Move to 2
			history.push(4);
			expect(history.redo()).toBeUndefined();
			expect(history.current()).toBe(4);
		});

		it("should handle capacity correctly", () => {
			const history = new History(3, [1, 2, 3]);
			history.push(4);
			expect(Array.from(history)).toEqual([2, 3, 4]);
		});
	});

	describe("iterator", () => {
		it("should iterate over items in the history", () => {
			const history = new History(5, [1, 2, 3]);
			expect(Array.from(history)).toEqual([1, 2, 3]);
		});

		it("should handle empty history", () => {
			const history = new History(5);
			expect(Array.from(history)).toEqual([]);
		});
	});
});
