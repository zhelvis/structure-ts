/**
 * A key that can be used to access properties in objects or arrays.
 */
type Key = string | number | symbol;

/**
 * A path representing the location of a value in a nested structure.
 * Each element in the array represents a step in the path.
 */
type Path = Array<Key>;

/**
 * Enumeration of possible diff action types.
 */
export enum ActionType {
	/** Indicates a value was added */
	ADD,
	/** Indicates a value was removed */
	REMOVE,
	/** Indicates a value was changed */
	CHANGE,
}

/**
 * Represents an action that adds a value at a specific path.
 */
type AddAction = {
	type: ActionType.ADD;
	path: Path;
	value: unknown;
};

/**
 * Represents an action that removes a value at a specific path.
 */
type RemoveAction = {
	type: ActionType.REMOVE;
	path: Path;
	value: unknown;
};

/**
 * Represents an action that changes a value at a specific path.
 */
type ChangeAction = {
	type: ActionType.CHANGE;
	path: Path;
	from: unknown;
	to: unknown;
};

/**
 * Union type representing any possible diff action.
 */
export type Action = AddAction | RemoveAction | ChangeAction;

/**
 * Array of actions representing the complete difference between two values.
 */
export type Diff = Action[];

type UnknownRecord = Record<string | number | symbol, unknown>;

/**
 * Checks if a value is object-like (objects or arrays).
 * @param value - The value to check
 * @returns True if the value is an object or array, false otherwise
 */
const isObjectLike = (
	value: unknown,
): value is UnknownRecord | Array<unknown> => {
	return value !== null && typeof value === "object";
};

/**
 * Checks if a value is a plain object (not an array).
 * @param value - The value to check
 * @returns True if the value is a plain object, false otherwise
 */
const isObject = (value: unknown): value is UnknownRecord => {
	return isObjectLike(value) && !Array.isArray(value);
};

/**
 * Computes the difference between two objects.
 * @param oldValue - The original object
 * @param newValue - The new object to compare against
 * @param visited - WeakSet to track visited objects for circular reference detection
 * @returns Array of diff actions or undefined if no differences found
 */
const computeObjectsDiff = (
	oldValue: UnknownRecord,
	newValue: UnknownRecord,
	visited: WeakSet<object>,
): Diff | undefined => {
	const diff: Diff = [];

	const visitedKeys = new Set<Key>();

	for (const key in newValue) {
		visitedKeys.add(key);
		const nestedDiff = computeDiff(oldValue[key], newValue[key], visited);
		if (nestedDiff) {
			nestedDiff.forEach((action) => {
				diff.push({
					...action,
					path: [key, ...action.path],
				});
			});
		}
	}

	for (const key in oldValue) {
		if (!visitedKeys.has(key)) {
			diff.push({
				type: ActionType.REMOVE,
				path: [key],
				value: oldValue[key],
			});
		}
	}

	return diff.length > 0 ? diff : undefined;
};

/**
 * Computes the difference between two arrays.
 * @param oldValue - The original array
 * @param newValue - The new array to compare against
 * @param visited - WeakSet to track visited objects for circular reference detection
 * @returns Array of diff actions or undefined if no differences found
 */
const computeArraysDiff = (
	oldValue: unknown[],
	newValue: unknown[],
	visited: WeakSet<object>,
): Diff | undefined => {
	const diff: Diff = [];

	let i = 0;
	for (; i < newValue.length; i++) {
		const nestedDiff = computeDiff(oldValue[i], newValue[i], visited);
		if (nestedDiff) {
			nestedDiff.forEach((action) => {
				diff.push({
					...action,
					path: [i, ...action.path],
				});
			});
		}
	}

	for (; i < oldValue.length; i++) {
		diff.push({
			type: ActionType.REMOVE,
			path: [i],
			value: oldValue[i],
		});
	}

	return diff.length > 0 ? diff : undefined;
};

/**
 * Computes the difference between two values of different types or primitive values.
 * @param oldValue - The original value
 * @param newValue - The new value to compare against
 * @returns Array of diff actions or undefined if no differences found
 */
const computeMixedDiff = (
	oldValue: unknown,
	newValue: unknown,
): Diff | undefined => {
	if (
		oldValue !== undefined &&
		newValue !== undefined &&
		oldValue !== newValue
	) {
		return [
			{
				type: ActionType.CHANGE,
				path: [],
				from: oldValue,
				to: newValue,
			},
		];
	}

	if (oldValue === undefined && newValue !== undefined) {
		return [
			{
				type: ActionType.ADD,
				path: [],
				value: newValue,
			},
		];
	}

	if (oldValue !== undefined && newValue === undefined) {
		return [
			{
				type: ActionType.REMOVE,
				path: [],
				value: oldValue,
			},
		];
	}
};

/**
 * Computes the structural difference between two values.
 *
 * This function performs a deep comparison of two values and returns an array of actions
 * that describe how to transform the old value into the new value. It handles objects,
 * arrays, and primitive values, and includes protection against circular references.
 *
 * @param oldValue - The original value to compare from
 * @param newValue - The new value to compare to
 * @param visited - WeakSet used internally to track visited objects for circular reference detection
 * @returns Array of diff actions, or undefined if the values are identical
 *
 * @example
 * ```typescript
 * // Compare simple objects
 * const diff = computeDiff({ a: 1, b: 2 }, { a: 1, b: 3, c: 4 });
 * // Returns: [
 * //   { type: ActionType.CHANGE, path: ['b'], from: 2, to: 3 },
 * //   { type: ActionType.ADD, path: ['c'], value: 4 }
 * // ]
 *
 * // Compare arrays
 * const arrayDiff = computeDiff([1, 2, 3], [1, 4, 3]);
 * // Returns: [{ type: ActionType.CHANGE, path: [1], from: 2, to: 4 }]
 *
 * // Identical values return undefined
 * const noDiff = computeDiff({ a: 1 }, { a: 1 }); // undefined
 * ```
 */
export const computeDiff = (
	oldValue: unknown,
	newValue: unknown,
	visited: WeakSet<object> = new WeakSet<object>(),
): Diff | undefined => {
	if (oldValue === newValue) {
		return undefined; // Early exit for strict equality
	}

	const oldIsObject = isObject(oldValue);
	const newIsObject = isObject(newValue);

	if (oldIsObject && visited.has(oldValue)) {
		return undefined; // Skip circular references
	}

	if (oldIsObject) {
		visited.add(oldValue);
	}

	if (oldIsObject && newIsObject) {
		return computeObjectsDiff(oldValue, newValue, visited);
	} else if (Array.isArray(oldValue) && Array.isArray(newValue)) {
		return computeArraysDiff(oldValue, newValue, visited);
	} else {
		return computeMixedDiff(oldValue, newValue);
	}
};

/**
 * Throws an error for invalid path navigation.
 * @param path - The path that caused the error
 * @returns Never returns, always throws
 */
const throwInvalidPathError = (path: Path): never => {
	throw new Error(`Invalid path: ${path.join(".")}`);
};

/**
 * Validates a key to prevent prototype pollution attacks.
 * @param key - The key to validate
 * @throws {Error} If the key is dangerous (prototype pollution)
 */
const validateKey = (key: Key): void => {
	// prevent prototype pollution
	if (key === "__proto__" || key === "constructor" || key === "prototype") {
		throw new Error("Prototype pollution detected");
	}
};

/**
 * Navigates to a specific path in an object structure and returns the parent container and final key.
 * @param target - The root object to navigate from
 * @param path - The path to navigate to
 * @returns Tuple containing the parent container and the final key
 * @throws {Error} If the path is invalid or cannot be navigated
 */
const navigate = (target: unknown, path: Path): [unknown, Key] => {
	let current = target;

	for (let i = 0; i < path.length - 1; i++) {
		const key = path[i];
		validateKey(key);

		if (isObject(current)) {
			const value = current[key];
			if (isObjectLike(value)) {
				current = value;
			} else {
				throwInvalidPathError(path);
			}
		} else if (Array.isArray(current) && typeof key === "number") {
			current = current[key];
		} else {
			throwInvalidPathError(path);
		}
	}

	const key = path[path.length - 1];
	validateKey(key);

	return [current, key];
};

/**
 * Applies an ADD action to a target object.
 * @param target - The object to modify
 * @param action - The ADD action to apply
 * @returns The modified target object
 */
const applyAddAction = (target: unknown, action: AddAction): unknown => {
	if (action.path.length === 0) {
		target = action.value;
		return target;
	}

	const [current, key] = navigate(target, action.path);

	if (isObject(current)) {
		current[key] = action.value;
	} else if (Array.isArray(current) && typeof key === "number") {
		current.splice(key, 0, action.value);
	}

	return target;
};

/**
 * Applies a REMOVE action to a target object.
 * @param target - The object to modify
 * @param action - The REMOVE action to apply
 * @returns The modified target object
 */
const applyRemoveAction = (target: unknown, action: RemoveAction): unknown => {
	if (action.path.length === 0) {
		target = undefined;
		return target;
	}

	const [current, key] = navigate(target, action.path);

	if (isObject(current)) {
		delete current[key];
	} else if (Array.isArray(current) && typeof key === "number") {
		current.splice(key, 1);
	}

	return target;
};

/**
 * Applies a CHANGE action to a target object.
 * @param target - The object to modify
 * @param action - The CHANGE action to apply
 * @returns The modified target object
 */
const applyChangeAction = (target: unknown, action: ChangeAction): unknown => {
	if (action.path.length === 0) {
		target = action.to;
		return target;
	}

	const [current, key] = navigate(target, action.path);

	if (isObject(current)) {
		current[key] = action.to;
	} else if (Array.isArray(current) && typeof key === "number") {
		current[key] = action.to;
	}

	return target;
};

/**
 * Creates a deep clone of a value, with special handling for symbols.
 * @param value - The value to clone
 * @returns A deep clone of the value, or the original value if it's a symbol
 */
const clone = (value: unknown): unknown => {
	if (typeof value === "symbol") {
		return value;
	}
	return structuredClone(value);
};

/**
 * Throws an error for unknown action types. Uses TypeScript's exhaustiveness checking.
 * @param action - The action with an unknown type (should be never)
 * @returns Never returns, always throws
 */
const throwInvalidActionError = (action: never): never => {
	throw new Error(`Unknown action type: ${(action as { type: unknown }).type}`);
};

/**
 * Applies a series of diff actions to a target object, creating a new modified version.
 *
 * This function takes a target object and a series of actions, then applies each action
 * in sequence to create a transformed version of the target. The original target is not
 * modified - a deep clone is created first.
 *
 * @param target - The object to apply changes to (will not be modified)
 * @param diff - Array of actions representing the changes to apply
 * @returns A new object with all the changes applied
 *
 * @throws {Error} When navigation fails or invalid operations are attempted
 * @throws {Error} When unknown action types are encountered
 * @throws {Error} When prototype pollution is detected
 *
 * @example
 * ```typescript
 * const original = { a: 1, b: { c: 2 } };
 * const changes = [
 *   { type: ActionType.CHANGE, path: ['b', 'c'], from: 2, to: 3 },
 *   { type: ActionType.ADD, path: ['d'], value: 4 }
 * ];
 * const result = applyDiff(original, changes);
 * // result: { a: 1, b: { c: 3 }, d: 4 }
 * // original: { a: 1, b: { c: 2 } } (unchanged)
 * ```
 */
export const applyDiff = (target: unknown, diff: Diff): unknown => {
	let result = clone(target);

	for (const action of diff) {
		switch (action.type) {
			case ActionType.ADD:
				result = applyAddAction(result, action);
				break;
			case ActionType.REMOVE:
				result = applyRemoveAction(result, action);
				break;
			case ActionType.CHANGE:
				result = applyChangeAction(result, action);
				break;
			default:
				throwInvalidActionError(action);
		}
	}

	return result;
};

/**
 * Reverts a series of diff actions by applying their inverse operations.
 *
 * This function takes a target object and a series of actions, then applies the inverse
 * of each action to undo the changes. This is particularly useful for implementing
 * undo functionality. The original target is not modified - a deep clone is created first.
 *
 * @param target - The object to revert changes from (will not be modified)
 * @param diff - Array of actions to invert and apply
 * @returns A new object with all the changes reverted
 *
 * @throws {Error} When navigation fails or invalid operations are attempted
 * @throws {Error} When unknown action types are encountered
 * @throws {Error} When prototype pollution is detected
 *
 * @example
 * ```typescript
 * const modified = { a: 1, b: { c: 3 }, d: 4 };
 * const changes = [
 *   { type: ActionType.CHANGE, path: ['b', 'c'], from: 2, to: 3 },
 *   { type: ActionType.ADD, path: ['d'], value: 4 }
 * ];
 * const reverted = revertDiff(modified, changes);
 * // reverted: { a: 1, b: { c: 2 } } (d is removed, c is changed back)
 *
 * // Perfect for undo systems:
 * const original = { x: 1 };
 * const diff = computeDiff(original, { x: 2, y: 3 });
 * const modified = applyDiff(original, diff);
 * const undone = revertDiff(modified, diff);
 * // undone equals original
 * ```
 */
export const revertDiff = (target: unknown, diff: Diff): unknown => {
	let result = clone(target);

	for (const action of diff) {
		switch (action.type) {
			case ActionType.ADD:
				result = applyRemoveAction(result, {
					type: ActionType.REMOVE,
					path: action.path,
					value: action.value,
				});
				break;
			case ActionType.REMOVE:
				result = applyAddAction(result, {
					type: ActionType.ADD,
					path: action.path,
					value: action.value,
				});
				break;
			case ActionType.CHANGE:
				result = applyChangeAction(result, {
					type: ActionType.CHANGE,
					path: action.path,
					from: action.to,
					to: action.from,
				});
				break;
			default:
				throwInvalidActionError(action);
		}
	}

	return result;
};
