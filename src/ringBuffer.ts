/**
 * A ring buffer (or circular buffer) is a data structure that uses a single, fixed-size buffer as if it were connected end-to-end.
 * It is particularly useful for buffering data streams and implementing memory efficient queues and stacks.
 */
export class RingBuffer<T> {
	#capacity: number;
	#size: number;
	#head: number;
	#tail: number;
	#buffer: Array<T>;

	/**
	 * The capacity of the ring buffer.
	 */
	get capacity(): number {
		return this.#capacity;
	}

	/**
	 * The current size of the ring buffer.
	 */
	get size(): number {
		return this.#size;
	}

	constructor(capacity: number, items?: Array<T>) {
		this.#capacity = capacity;
		this.#buffer = new Array<T>(capacity);
		this.#head = 0;
		this.#size = 0;
		this.#tail = 0;

		if (items) {
			this.push(...items);
		}
	}

	/**
	 * Calculates the internal buffer index for a given index, allowing for both positive and negative integers.
	 * @param index - The index to convert.
	 * @returns The internal buffer index, or -1 if the index is out of bounds.
	 */
	#calcInternalIndex(index: number): number {
		if (index < 0) {
			// Check out of bounds for negative index
			if (index < -this.#size) {
				return -1;
			}

			return (this.#tail + index + this.#capacity) % this.#capacity;
		}

		// Check out of bounds for positive index
		if (index >= this.#size) {
			return -1;
		}

		return (this.#head + index) % this.#capacity;
	}

	/**
	 * Gets the item at index, allowing for positive and negative integers.
	 * Negative integers count back from the last item in the buffer.
	 * @param index - The index of the item to get.
	 * @returns The item at the specified index, or undefined if the index is out of bounds.
	 */
	get(index: number): T | undefined {
		return this.#buffer[this.#calcInternalIndex(index)];
	}

	/**
	 * Sets an item at index, allowing for positive and negative integers.
	 * Negative integers count back from the last item in the buffer.
	 *
	 * @param index - The index of the item to set.
	 * @param item - The new item to set at the specified index.
	 * @throws Error if the index is out of bounds.
	 */
	set(index: number, item: T): void {
		const internalIndex = this.#calcInternalIndex(index);

		if (internalIndex === -1) {
			throw new RangeError("Index out of bounds");
		}

		this.#buffer[internalIndex] = item;
	}

	/**
	 * An iterator for the items in the buffer.
	 */
	*[Symbol.iterator](): Iterator<T> {
		let index = 0;
		while (index < this.#size) {
			// Can safely cast to T since we iterate over valid range
			yield this.get(index) as T;
			index++;
		}
	}

	/**
	 * Adds items to the end of the buffer.
	 * If the buffer is full, it will delete the items at the head.
	 * @param items - The items to add to the end of the buffer.
	 * @returns The new size of the buffer.
	 */
	push(...items: T[]): number {
		for (let i = 0; i < items.length; i++) {
			const item = items[i];
			if (this.#size === this.#capacity) {
				this.#head = (this.#head + 1) % this.#capacity;
			}

			this.#buffer[this.#tail] = item;
			this.#tail = (this.#tail + 1) % this.#capacity;

			if (this.#size < this.#capacity) {
				this.#size++;
			}
		}

		return this.#size;
	}

	/**
	 * Removes and returns the last item from the buffer.
	 * @returns The last item from the buffer, or undefined if the buffer is empty.
	 */
	pop(): T | undefined {
		if (this.#size === 0) {
			return undefined;
		}

		const lastIndex = (this.#tail - 1 + this.#capacity) % this.#capacity;
		const item = this.#buffer[lastIndex];
		delete this.#buffer[lastIndex];
		this.#tail = lastIndex;
		this.#size--;

		return item;
	}

	/**
	 * Adds items to the start of the buffer.
	 * If the buffer is full, it will delete the items at the tail.
	 * @param items - The items to add to the start of the buffer.
	 * @returns The new size of the buffer.
	 */
	unshift(...items: T[]): number {
		for (let i = items.length - 1; i >= 0; i--) {
			const item = items[i];

			if (this.#size === this.#capacity) {
				this.#tail = (this.#tail - 1 + this.#capacity) % this.#capacity;
			}

			this.#head = (this.#head - 1 + this.#capacity) % this.#capacity;
			this.#buffer[this.#head] = item;

			if (this.#size < this.#capacity) {
				this.#size++;
			}
		}

		return this.#size;
	}

	/**
	 * Removes and returns the first item from the buffer.
	 * @returns The first item from the buffer, or undefined if the buffer is empty.
	 */
	shift(): T | undefined {
		if (this.#size === 0) {
			return undefined;
		}

		const item = this.#buffer[this.#head];
		delete this.#buffer[this.#head];
		this.#head = (this.#head + 1) % this.#capacity;
		this.#size--;

		return item;
	}
}
