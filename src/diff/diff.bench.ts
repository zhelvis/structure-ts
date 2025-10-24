import { bench, do_not_optimize, run } from "mitata";
import {
	ActionType,
	applyDiff,
	computeDiff,
	type Diff,
	revertDiff,
} from "./diff";

const oldvalue = {
	a: "12345678901234567890",
	foo: {
		b: {
			c: 1,
			d: [{ e: "foo" }, { f: "bar" }],
		},
		g: {
			1: true,
			2: true,
			3: false,
			4: true,
		},
	},
	bar: {
		b: {
			c: 2,
			d: [{ e: "baz" }, { f: "foo" }],
		},
		g: {
			1: false,
			2: false,
			3: false,
			4: true,
		},
	},
};

const diff: Diff = [
	{
		type: ActionType.CHANGE,
		path: ["a"],
		from: "12345678901234567890",
		to: "1",
	},
	{ type: ActionType.ADD, path: ["foo", "b", "d", 2], value: { e: "baz" } },
	{ type: ActionType.REMOVE, path: ["bar", "g", 1], value: false },
];

const newValue = applyDiff(oldvalue, diff);

bench("computeDiff", function* () {
	yield {
		0: () => structuredClone(oldvalue),
		1: () => structuredClone(newValue),
		bench: (oldvalue: unknown, newValue: unknown) =>
			do_not_optimize(computeDiff(oldvalue, newValue)),
	};
}).gc("inner");

bench("applyDiff", function* () {
	yield {
		0: () => structuredClone(oldvalue),
		1: () => structuredClone(diff),
		bench: (oldvalue: unknown, diff: Diff) =>
			do_not_optimize(applyDiff(oldvalue, diff)),
	};
}).gc("inner");

bench("revertDiff", function* () {
	yield {
		0: () => structuredClone(newValue),
		1: () => structuredClone(diff),
		bench: (newValue: unknown, diff: Diff) =>
			do_not_optimize(revertDiff(newValue, diff)),
	};
}).gc("inner");

await run({ format: "markdown" });
