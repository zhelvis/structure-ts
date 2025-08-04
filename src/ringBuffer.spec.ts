import { describe, expect, it } from "bun:test";
import { RingBuffer } from "./ringBuffer";

describe("RingBuffer", () => {
	describe("capacity", () => {
		it("should return the capacity of the buffer", () => {
			const buffer = new RingBuffer(5);
			expect(buffer.capacity).toBe(5);
		});

		it("should throw error on capacity change", () => {
			const buffer = new RingBuffer(5);
			expect(() => {
				(buffer as { capacity: number }).capacity = 10;
			}).toThrow(Error);
		});
	});

	describe("size", () => {
		it("should return the current size of the buffer", () => {
			const buffer = new RingBuffer(5, [1, 2, 3]);
			expect(buffer.size).toBe(3);
		});

		it("should throw error on size change", () => {
			const buffer = new RingBuffer(5);
			expect(() => {
				(buffer as { size: number }).size = 10;
			}).toThrow(Error);
		});
	});

	describe("constructor", () => {
		it("should create instance of RingBuffer", () => {
			const buffer = new RingBuffer<number>(5);
			expect(buffer).toBeInstanceOf(RingBuffer);
		});

		it("should initialize with initial items", () => {
			const buffer = new RingBuffer(5, [1, 2, 3]);
			expect(Array.from(buffer)).toEqual([1, 2, 3]);
		});

		it("should overwrite slots if initial items exceed capacity", () => {
			const buffer = new RingBuffer(3, [1, 2, 3, 4]);
			expect(Array.from(buffer)).toEqual([2, 3, 4]);
		});
	});

	describe("get", () => {
		it("should return item at positive index", () => {
			const buffer = new RingBuffer(5, [1, 2, 3]);
			expect(buffer.get(1)).toBe(2);
		});

		it("should return item at negative index", () => {
			const buffer = new RingBuffer(5, [1, 2, 3]);
			expect(buffer.get(-2)).toBe(2);
		});

		it("should return undefined for out of bounds index", () => {
			const buffer = new RingBuffer(5, [1, 2, 3]);
			expect(buffer.get(3)).toBeUndefined();
			expect(buffer.get(-4)).toBeUndefined();
			expect(buffer.get(100)).toBeUndefined();
			expect(buffer.get(-100)).toBeUndefined();

			buffer.shift();
			expect(buffer.get(-3)).toBeUndefined();

			buffer.pop();
			expect(buffer.get(2)).toBeUndefined();
		});
	});

	describe("set", () => {
		it("should set item at positive index", () => {
			const buffer = new RingBuffer(5, [1, 2, 3]);
			buffer.set(1, 20);
			expect(buffer.get(1)).toBe(20);
		});

		it("should set item at negative index", () => {
			const buffer = new RingBuffer(5, [1, 2, 3]);
			buffer.set(-1, 30);
			expect(buffer.get(2)).toBe(30);
		});

		it("should throw error for out of bounds index", () => {
			const buffer = new RingBuffer(5, [1, 2, 3]);
			expect(() => buffer.set(-4, 10)).toThrow(RangeError);
			expect(() => buffer.set(3, 10)).toThrow(RangeError);
		});
	});

	describe("iterator", () => {
		it("should iterate over items in the buffer", () => {
			const buffer = new RingBuffer(5, [1, 2, 3]);
			expect(Array.from(buffer)).toEqual([1, 2, 3]);
		});
	});

	describe("push", () => {
		it("should add items to the end of the buffer and return new size", () => {
			const buffer = new RingBuffer(5);
			expect(buffer.push(1, 2, 3)).toBe(3);
			expect(Array.from(buffer)).toEqual([1, 2, 3]);
		});

		it("should overwrite items when capacity is exceeded", () => {
			const buffer = new RingBuffer(3, [1, 2, 3]);
			expect(buffer.push(4)).toBe(3);
			expect(Array.from(buffer)).toEqual([2, 3, 4]);
			expect(buffer.push(5, 6)).toBe(3);
			expect(Array.from(buffer)).toEqual([4, 5, 6]);
		});
	});

	describe("pop", () => {
		it("should remove and return the last item", () => {
			const buffer = new RingBuffer(5, [1, 2, 3]);
			expect(buffer.pop()).toBe(3);
			expect(Array.from(buffer)).toEqual([1, 2]);
			expect(buffer.size).toBe(2);
		});

		it("should return undefined if buffer is empty", () => {
			const buffer = new RingBuffer(5);
			expect(buffer.pop()).toBeUndefined();
		});

		it("should correctly calculate tail position when capacity equals 1", () => {
			const buffer = new RingBuffer(1, [1]);
			expect(buffer.pop()).toBe(1);
		});
	});

	describe("unshift", () => {
		it("should add items to the start of the buffer and return new size", () => {
			const buffer = new RingBuffer(5);
			expect(buffer.unshift(1, 2, 3)).toBe(3);
			expect(Array.from(buffer)).toEqual([1, 2, 3]);
		});

		it("should overwrite items when capacity is exceeded", () => {
			const buffer = new RingBuffer(3, [1, 2, 3]);
			expect(buffer.unshift(0)).toBe(3);
			expect(Array.from(buffer)).toEqual([0, 1, 2]);
			expect(buffer.unshift(-2, -1)).toBe(3);
			expect(Array.from(buffer)).toEqual([-2, -1, 0]);
		});
	});

	describe("shift", () => {
		it("should remove and return the first item", () => {
			const buffer = new RingBuffer(5, [1, 2, 3]);
			expect(buffer.shift()).toBe(1);
			expect(Array.from(buffer)).toEqual([2, 3]);
		});

		it("should return undefined if buffer is empty", () => {
			const buffer = new RingBuffer(5);
			expect(buffer.shift()).toBeUndefined();
		});
	});
});
