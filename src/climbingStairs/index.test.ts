import { describe, test, expect } from "@jest/globals";
import { climbStairs } from "./index";

describe("Climb stairs function", () => {
  test("Case 1", () => {
    expect(climbStairs(2)).toEqual(2);
  });

  test("Case 2", () => {
    expect(climbStairs(3)).toEqual(3);
  });

  test("Case 3", () => {
    expect(climbStairs(4)).toEqual(5);
  });

  test("Case 4", () => {
    expect(climbStairs(5)).toEqual(8);
  });
});
