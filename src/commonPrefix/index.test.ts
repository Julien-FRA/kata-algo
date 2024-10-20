import { describe, test, expect } from "@jest/globals";
import { longestCommonPrefix } from "./index";

describe("Commun prefix function", () => {
  test("Case 1", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
  });

  test("Case 2", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
  });
});
