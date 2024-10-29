export const strStr = (haystack: string, needle: string): number => {
  let occurence: number = -1;
  let j: number = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (needle[j] === haystack[i]) {
      j++;
    } else {
      i = i - j;
      j = 0;
    }

    if (needle.length === j) {
      return (occurence = i - j + 1);
    }
  }

  return occurence;
};
