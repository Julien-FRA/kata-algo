export const lengthOfLastWord = (s: string): number => {
  let arrayString: string[] = s.split(" ");
  let currentWord: string = "";

  for (let i = 0; i < arrayString.length; i++) {
    if (arrayString[i].length > 0) {
      currentWord = arrayString[i];
    }
  }

  return currentWord.length;
};
