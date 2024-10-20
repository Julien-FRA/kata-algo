import { describe, test, expect } from "@jest/globals";
import { isValid } from "./index";

describe("Valid parenthese function", () => {
  test("Case 1", () => {
    expect(isValid("()")).toEqual(true);
  });

  test("Case 2", () => {
    expect(isValid("()[]{}")).toEqual(true);
  });

  test("Case 3", () => {
    expect(isValid("(]")).toEqual(false);
  });

  test("Case 4", () => {
    expect(isValid("([])")).toEqual(true);
  });
});
