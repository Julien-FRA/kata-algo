export const climbStairs = (n: number): number => {
  if (n === 0) return 0;

  if (n === 1) return 1;

  let ways: number = 0;
  let n1: number = 0;
  let n2: number = 1;

  // Exemple :
  // i = 1 - O + 1 = 1
  // i = 2 - 1 + 1 = 2
  // i = 3 - 1 + 2 = 3
  // i = 4 - 2 + 3 = 5
  // i = 5 - 3 + 5 = 8

  for (let i = 1; i <= n; i++) {
    ways = n1 + n2;

    n1 = n2;
    n2 = ways;
  }

  return ways;
};
