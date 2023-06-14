import dictionaryEn from "dictionary-en-gb";

const inDictionary = function (word) {
  return dictionaryEn(function (error, en) {
    if (error) throw error;
    return en.dic.includes(word);
  });
};

export default inDictionary;
