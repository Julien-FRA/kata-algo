export const longestCommonPrefix = (strs: string[]): string => {
  let common: string = "";

  for (let i = 0; i < strs.length; i++) {
    let currentWord = strs[i];
    let nextWord = strs[i + 1];
    if (nextWord) {
      for (let j = 0; j < currentWord.length && j < nextWord.length; j++) {
        if (currentWord[j] && nextWord[j]) {
          console.log("current Word", currentWord[j]);

          console.log("next Word", nextWord[j]);

          if (currentWord[j] == nextWord[j]) {
            common += currentWord[j];
          }
        }
      }
    }
  }

  return common;
};
