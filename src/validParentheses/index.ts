export const isValid = (s: string): boolean => {
  let arr: string[] = [];
  const brackets: { [symbol: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      arr.push(s[i]);
    }

    if (s[i] == ")" || s[i] == "]" || s[i] == "}") {
      if (arr.length == 0) return false;
      if (arr.pop() !== brackets[s[i]]) return false;
    }
  }

  return arr.length == 0 ? true : false;
};
