import { describe, test, expect } from "@jest/globals";
import { strStr } from "./index";

describe("Find Index Occurence function", () => {
  test("Case 1", () => {
    expect(strStr("sadbutsad", "sad")).toEqual(0);
  });

  test("Case 2", () => {
    expect(strStr("leetcode", "leeto")).toEqual(-1);
  });
});
