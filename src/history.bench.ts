import { bench, do_not_optimize, type k_state, run } from "mitata";
import { History } from "./history";

function createFilledArray(size: number): number[] {
	return Array.from({ length: size }, (_, i) => i);
}

function createFilledHistory(size: number): History<number> {
	return new History(size, createFilledArray(size));
}

bench("History.current (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const history = createFilledHistory(size);
	yield () => do_not_optimize(history.current());
})
	.gc("inner")
	.range("size", 10, 100_000, 10);

bench("History.undo (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const history = createFilledHistory(size);
	yield {
		0: () => history.push(42),
		bench: () => history.undo(),
	};
})
	.gc("inner")
	.range("size", 10, 100_000, 10);

bench("History.redo (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const history = createFilledHistory(size);
	yield {
		0: () => history.undo(),
		bench: () => history.redo(),
	};
})
	.gc("inner")
	.range("size", 10, 100_000, 10);

bench("History.push (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const history = createFilledHistory(size);

	yield {
		0: () => {
			history.undo();
			history.undo();
			history.push(42);
		},
		bench: () => history.push(42),
	};
})
	.gc("inner")
	.range("size", 10, 100_000, 10);

bench("History serialization (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const history = createFilledHistory(size);
	yield () => Array.from(history);
})
	.gc("inner")
	.range("size", 10, 100_000, 10);

bench("History deserialization (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const array = createFilledArray(size);
	yield () => new History(size, array);
})
	.gc("inner")
	.range("size", 10, 100_000, 10);

await run({ format: "markdown" });
