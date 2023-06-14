const hasRepeatingLetters = function (word) {
  return /(.).*\1/.test(word);
};

export default hasRepeatingLetters;
