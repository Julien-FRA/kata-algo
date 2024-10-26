import { describe, test, expect } from "@jest/globals";
import { removeElement } from "./index";

describe("Remove element function", () => {
  test("Case 1", () => {
    expect(removeElement([3, 2, 2, 3], 3)).toEqual(2);
  });

  test("Case 2", () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
  });
});
