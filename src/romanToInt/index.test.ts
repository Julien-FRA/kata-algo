import { describe, test, expect } from "@jest/globals";
import { romanToInt } from "./index";

describe("Roman to integer function", () => {
  test("Case 1", () => {
    expect(romanToInt("IV")).toEqual(4);
  });

  test("Case 2", () => {
    expect(romanToInt("LVIII")).toEqual(58);
  });

  test("Case 3", () => {
    expect(romanToInt("MCMXCIV")).toEqual(1994);
  });
});
