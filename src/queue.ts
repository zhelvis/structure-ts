type Node<T> = {
	__proto__: null;
	value: T;
	next?: Node<T>;
	prev?: Node<T>;
};

export class Queue<T> {
	#start: Node<T> | undefined;
	#end: Node<T> | undefined;

	constructor(items?: Array<T>) {
		this.#start;
		this.#end;

		if (items) {
			for (let i = 0; i < items.length; i++) {
				this.enqueue(items[i]);
			}
		}
	}

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

	dequeue(): T | undefined {
		if (!this.#start) return undefined;
		const value = this.#start.value;
		this.#start = this.#start.next;
		return value;
	}

	*[Symbol.iterator](): Iterator<T> {
		let current = this.#start;
		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}
