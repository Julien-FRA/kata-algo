type Numbers = {
  V: number;
  I: number;
  X: number;
  L: number;
  C: number;
  D: number;
  M: number;
};

export const romanToInt = (s: string): number => {
  let result: number = 0;

  const numbers: Numbers | any = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    const current: number = numbers[s[i]];
    const next: number = numbers[s[i + 1]];

    if (current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }

  return result;
};
