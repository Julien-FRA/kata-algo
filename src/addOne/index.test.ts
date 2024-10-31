import { describe, test, expect } from "@jest/globals";
import { plusOne } from "./index";

describe("Plus One function", () => {
  test("Case 1", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  test("Case 2", () => {
    expect(
      plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
    ).toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
  });
});
