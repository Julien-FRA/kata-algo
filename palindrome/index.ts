const isPalindrome = (x: number | any): boolean =>
  x.toString().split("").reverse().join("") == x ? true : false;
