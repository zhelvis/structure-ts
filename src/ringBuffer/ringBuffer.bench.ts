import { bench, type k_state, run } from "mitata";
import { RingBuffer } from "./ringBuffer.js";

function createFilledArray(size: number): number[] {
	return Array.from({ length: size }, (_, i) => i);
}

function createFilledBuffer(size: number): RingBuffer<number> {
	return new RingBuffer(size, createFilledArray(size));
}

function getRandomInt(min: number, max: number) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

bench("RingBuffer.get (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const buffer = createFilledBuffer(size);
	yield {
		0: () => getRandomInt(-size, size - 1),
		bench: (index: number) => buffer.get(index),
	};
})
	.gc("inner")
	.range("size", 1, 100_000, 10);

bench("RingBuffer.set (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const buffer = createFilledBuffer(size);
	yield {
		0: () => getRandomInt(-size, size - 1),
		bench: (index: number) => buffer.set(index, 42),
	};
})
	.gc("inner")
	.range("size", 1, 100_000, 10);

bench("RingBuffer.push (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const buffer = new RingBuffer(size);
	yield {
		0: () => buffer.pop(),
		bench: () => buffer.push(42),
	};
})
	.gc("inner")
	.range("size", 1, 100_000, 10);

bench("RingBuffer.pop (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const buffer = createFilledBuffer(size);
	yield {
		0: () => buffer.push(42),
		bench: () => buffer.pop(),
	};
})
	.gc("inner")
	.range("size", 1, 100_000, 10);

bench("RingBuffer.unshift (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const buffer = createFilledBuffer(size);
	yield {
		0: () => buffer.shift(),
		bench: () => buffer.unshift(42),
	};
})
	.gc("inner")
	.range("size", 1, 100_000, 10);

bench("RingBuffer.shift (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const buffer = createFilledBuffer(size);
	yield {
		0: () => buffer.unshift(42),
		bench: () => buffer.shift(),
	};
})
	.gc("inner")
	.range("size", 1, 100_000, 10);

bench("RingBuffer serialization (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const buffer = createFilledBuffer(size);
	yield () => Array.from(buffer);
})
	.gc("inner")
	.range("size", 1, 100_000, 10);

bench("RingBuffer deserialization (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const array = createFilledArray(size);
	yield () => new RingBuffer(size, array);
})
	.gc("inner")
	.range("size", 1, 100_000, 10);

await run({ format: "markdown" });
