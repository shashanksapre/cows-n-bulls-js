import fs from "node:fs/promises";
import { resolve } from "import-meta-resolve";

const inDictionary = async function (word) {
  const base = resolve("dictionary-en-gb", import.meta.url);
  const dictionary = await fs.readFile(new URL("index.dic", base));
  return dictionary.includes(word);
};

export default inDictionary;
