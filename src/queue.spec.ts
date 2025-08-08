import { describe, expect, it } from "bun:test";
import { Queue } from "./queue";

describe("Queue", () => {
	describe("constructor", () => {
		it("should create an instance of Queue", () => {
			const queue = new Queue<number>();
			expect(queue).toBeInstanceOf(Queue);
		});

		it("should initialize with items if provided", () => {
			const queue = new Queue<number>([1, 2, 3]);
			expect(Array.from(queue)).toEqual([1, 2, 3]);
		});
	});
	describe("enqueue", () => {
		it("should add an item to the queue", () => {
			const queue = new Queue<number>();
			queue.enqueue(1);
			expect(queue.dequeue()).toBe(1);
		});

		it("should maintain order of items", () => {
			const queue = new Queue<number>();
			queue.enqueue(1);
			queue.enqueue(2);
			expect(queue.dequeue()).toBe(1);
			expect(queue.dequeue()).toBe(2);
			queue.enqueue(3);
			expect(queue.dequeue()).toBe(3);
		});
	});

	describe("dequeue", () => {
		it("should return undefined when queue is empty", () => {
			const queue = new Queue<number>();
			expect(queue.dequeue()).toBeUndefined();
		});

		it("should remove and return the first item in the queue", () => {
			const queue = new Queue<number>();
			queue.enqueue(1);
			queue.enqueue(2);
			expect(queue.dequeue()).toBe(1);
			expect(queue.dequeue()).toBe(2);
		});
	});

	describe("iterator", () => {
		it("should iterate over items in the order they were added", () => {
			const queue = new Queue<number>();
			queue.enqueue(1);
			queue.enqueue(2);
			queue.enqueue(3);
			const items = Array.from(queue);
			expect(items).toEqual([1, 2, 3]);
		});

		it("should return an empty array when the queue is empty", () => {
			const queue = new Queue<number>();
			const items = Array.from(queue);
			expect(items).toEqual([]);
		});
	});
});
