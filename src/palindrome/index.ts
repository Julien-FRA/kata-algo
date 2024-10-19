export const isPalindrome = (x: string): boolean =>
  x.toString().split("").reverse().join("") == x ? true : false;
