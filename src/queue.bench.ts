import { bench, type k_state, run } from "mitata";
import { Queue } from "./queue";

function createFilledQueue(size: number): Queue<number> {
	const queue = new Queue<number>();
	for (let i = 0; i < size; i++) {
		queue.enqueue(i);
	}
	return queue;
}

bench("Queue.enqueue (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const queue = createFilledQueue(size);
	yield () => queue.enqueue(42);
})
	.gc("inner")
	.range("size", 1, 10_000_000, 10);

bench("Queue.dequeue (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const queue = createFilledQueue(size);
	yield () => queue.dequeue();
})
	.gc("inner")
	.range("size", 1, 10_000_000, 10);

bench("Queue serialization (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const queue = createFilledQueue(size);
	yield () => Array.from(queue);
})
	.gc("inner")
	.range("size", 1, 10_000_000, 10);

bench("Queue deserialization (size: $size)", function* (state: k_state) {
	const size = state.get("size");
	const array = Array.from({ length: size }, (_, i) => i);
	yield () => new Queue(array);
})
	.gc("inner")
	.range("size", 1, 10_000_000, 10);

await run({ format: "markdown" });
