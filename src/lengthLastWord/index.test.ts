import { describe, test, expect } from "@jest/globals";
import { lengthOfLastWord } from "./index";

describe("Length of last word function", () => {
  test("Case 1", () => {
    expect(lengthOfLastWord("Hello World")).toEqual(5);
  });

  test("Case 2", () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4);
  });

  test("Case 3", () => {
    expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6);
  });
});
