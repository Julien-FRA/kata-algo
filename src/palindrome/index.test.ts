import { describe, test, expect } from "@jest/globals";
import { isPalindrome } from "./index";

describe("Roman to integer function", () => {
  test("Case 1", () => {
    expect(isPalindrome("121")).toEqual(true);
  });

  test("Case 2", () => {
    expect(isPalindrome("-121")).toEqual(false);
  });

  test("Case 3", () => {
    expect(isPalindrome("10")).toEqual(false);
  });
});
