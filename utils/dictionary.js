import fs from "node:fs/promises";
import { resolve } from "import-meta-resolve";

const isEnglishWord = async function (word) {
  const base = resolve("dictionary-en-gb", import.meta.url);
  const dictionary = await fs.readFile(new URL("index.dic", base));
  return dictionary.includes(word);
};

const getWords = async function () {
  const base = resolve("dictionary-en-gb", import.meta.url);
  return await fs.readFile(new URL("index.dic", base));
};

const Dictionary = {
  isEnglishWord,
  getWords,
};

export default Dictionary;
