export const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 0) return "";

  let prefix: string = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let nextWord: string = strs[i];

    let j = 0;
    // Nombre de caractères en commun, on incrémente j.
    while (
      j < prefix.length &&
      j < nextWord.length &&
      prefix[j] === nextWord[j]
    ) {
      j++;
    }

    // On garde le nombre de caractères en commun.
    prefix = prefix.substring(0, j);

    // Si aucun caractères en commun, on retorune une chaine de caractère vide.
    if (prefix === "") return "";
  }

  return prefix;
};
