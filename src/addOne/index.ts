export const plusOne = (digits: number[]): number[] => {
  return (BigInt(digits.join("")) + BigInt(1)).toString().split("").map(Number);
};
