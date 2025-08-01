import { describe, expect, test } from "bun:test";
import { greet } from "./index";

describe("greet", () => {
	test("should return a greeting message", () => {
		expect(greet("World")).toBe("Hello, World!");
	});
});
