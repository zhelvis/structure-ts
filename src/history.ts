import { RingBuffer } from "./ringBuffer";

/**
 * Array-like structure with undo/redo functionality.
 * It uses limited stack based on {@link RingBuffer}.
 */
export class History<T> {
	/**
	 * RingBuffer to hold the history items.
	 */
	#buffer: RingBuffer<T>;

	/**
	 * Current position in history, relative to the end.
	 * -1 = newest item (latest state)
	 * -2 = one step back in history
	 * -3 = two steps back in history
	 * etc.
	 *
	 * This leverages {@link RingBuffer}'s negative indexing where `get(-1)` returns the last item.
	 */
	#currentPosition: number;

	/**
	 * Number of items in the history.
	 */
	get size(): number {
		return this.#buffer.size;
	}

	/**
	 * Maximum number of items the history can hold.
	 */
	get capacity(): number {
		return this.#buffer.capacity;
	}

	/**
	 * Creates a new History instance.
	 *
	 * @param capacity Maximum number of items the history can hold.
	 * @param items Initial items to populate the history. If the number of items exceeds capacity, the oldest items will be discarded.
	 * @param currentPosition Initial position relative to the end of history. Defaults to -1 (newest item).
	 * @throws {RangeError} if capacity is not a positive safe integer.
	 * @throws {RangeError} if currentPosition is out of bounds of history.
	 */
	constructor(
		capacity: number,
		items?: Array<T>,
		currentPosition: number = -1,
	) {
		if (
			items &&
			(currentPosition < -Math.min(items.length, capacity) ||
				currentPosition > -1)
		) {
			throw new RangeError("Current position must be between -capacity and -1");
		}

		this.#buffer = new RingBuffer<T>(capacity, items);
		this.#currentPosition = currentPosition;
	}

	/**
	 * Removes any "future" history that exists when we're not at the latest position.
	 * This happens when user undoes some actions and then performs a new action.
	 */
	#deleteFutureHistory(): void {
		while (this.#currentPosition < -1) {
			this.#buffer.pop();
			this.#currentPosition++;
		}
	}

	/**
	 * Gets the current item.
	 * @returns The current item or `undefined` if history is empty.
	 */
	current(): T | undefined {
		if (this.#buffer.size === 0) {
			return undefined;
		}

		return this.#buffer.get(this.#currentPosition);
	}

	/**
	 * Restore previous item.
	 * @returns The previous item or `undefined` if there is no previous item.
	 */
	undo(): T | undefined {
		if (this.#currentPosition === -this.#buffer.size) {
			return undefined;
		}

		return this.#buffer.get(--this.#currentPosition);
	}

	/**
	 * Restore next item.
	 * @returns The next item or `undefined` if there is no next item.
	 */
	redo(): T | undefined {
		if (this.#currentPosition === -1) {
			return undefined;
		}

		return this.#buffer.get(++this.#currentPosition);
	}

	/**
	 * Adds items to the end of the history.
	 * If the current item is not the latest, future history will be deleted.
	 * If the history is full, it will overwrite the oldest items.
	 * @param items - The items to add to the history.
	 * @returns The new size of the history.
	 */
	push(...items: T[]): number {
		this.#deleteFutureHistory();
		return this.#buffer.push(...items);
	}

	/**
	 * An iterator for the items in the history.
	 */
	*[Symbol.iterator](): IterableIterator<T> {
		yield* this.#buffer;
	}
}
