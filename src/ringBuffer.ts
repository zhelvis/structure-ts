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
		this.#head = 0;

		if (items) {
			if (items.length > capacity) {
				throw new Error(
					`Items length (${items.length}) exceeds buffer capacity (${capacity})`,
				);
			}

			this.#buffer = items;
			this.#size = items.length;
			this.#tail = items.length % capacity;
		} else {
			this.#buffer = new Array<T>(capacity);
			this.#size = 0;
			this.#tail = 0;
		}
	}

	/**
	 * Gets the item at index, allowing for positive and negative integers.
	 * Negative integers count back from the last item in the buffer.
	 * @param index - The index of the item to retrieve.
	 * @returns The item at the specified index, or undefined if the index is out of bounds.
	 */
	get(index: number): T | undefined {
		if (index >= this.#size) {
			return undefined;
		}

		if (index < 0) {
			return this.#buffer[
				(this.#tail + index + this.#capacity) % this.#capacity
			];
		}

		return this.#buffer[(this.#head + index) % this.#capacity];
	}

	/**
	 * Updates an item in the buffer at the specified index.
	 * @param index - The index of the item to update.
	 * @param item - The new item to set at the specified index.
	 * @throws Error if the index is out of bounds.
	 */
	set(index: number, item: T): void {
		if (index < 0 || index >= this.#size) {
			throw new Error(
				`Index ${index} is out of bounds for buffer size ${this.#size}`,
			);
		}

		this.#buffer[(this.#head + index) % this.#capacity] = item;
	}

	/**
	 * An iterator for the items in the buffer.
	 */
	*[Symbol.iterator](): Iterator<T | undefined> {
		let index = 0;
		while (index < this.#size) {		
			yield this.get(index);
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
		for (const item of items) {
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
		for (const item of items) {
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
		this.#head = (this.#head + 1) % this.#capacity;
		this.#size--;

		return item;
	}
}
