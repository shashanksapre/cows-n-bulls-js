import dictionaryEn from "dictionary-en-gb";

const inDictionary = function (word) {
  dictionaryEn(function (error, en) {
    if (error) throw error;
    return en.dic.includes(word);
  });
};

export default inDictionary;
