type Node<T> = {
	__proto__: null;
	value: T;
	next?: Node<T>;
	prev?: Node<T>;
};

/**
 * A FIFO implementation using a doubly linked list.
 */
export class Queue<T> {
	#start: Node<T> | undefined;
	#end: Node<T> | undefined;

	/**
	 * Creates a new Queue instance optionally initialized with items.
	 * @param items Optional array of items to enqueue at construction.
	 */
	constructor(items?: Array<T>) {
		if (items) {
			for (let i = 0; i < items.length; i++) {
				this.enqueue(items[i]);
			}
		}
	}

	/**
	 * Adds an item to the end of the queue.
	 * @param value The value to enqueue.
	 */
	enqueue(value: T): void {
		const item: Node<T> = {
			__proto__: null,
			value,
			next: undefined,
			prev: undefined,
		};

		if (this.#start === undefined) {
			this.#start = item;
			this.#end = this.#start;
			return;
		}

		item.prev = this.#end;
		// biome-ignore lint/style/noNonNullAssertion: if this.#start is defined, then this.#end is also defined
		this.#end!.next = item;
		this.#end = item;
	}

	/**
	 * Removes and returns the item at the front of the queue.
	 * @returns The dequeued value, or undefined if the queue is empty.
	 */
	dequeue(): T | undefined {
		if (!this.#start) return undefined;
		const value = this.#start.value;
		this.#start = this.#start.next;

		if (this.#start) {
			delete this.#start.prev;
			this.#start.prev = undefined;
		} else {
			this.#end = undefined;
		}

		return value;
	}

	/**
	 * Returns an iterator for the queue, iterating from front to end.
	 * @returns Iterator for the queue values.
	 */
	*[Symbol.iterator](): Iterator<T> {
		let current = this.#start;
		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}
