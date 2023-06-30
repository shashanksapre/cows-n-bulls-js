import Dictionary from "./utils/dictionary.js";
import hasRepeatingLetters from "./utils/repeat.js";
import isAlphabetsOnly from "./utils/alphabets.js";

const getHint = async function (word, guess) {
  const LowerCaseGuess = guess.toLowerCase();
  const LowerCaseWord = word.toLowerCase();
  if (
    isAlphabetsOnly(LowerCaseGuess) &&
    !hasRepeatingLetters(LowerCaseGuess) &&
    (await Dictionary.isEnglishWord(LowerCaseGuess)) &&
    guess.length == word.length
  ) {
    let CounterC = 0;
    let CounterB = 0;
    for (let index in LowerCaseGuess) {
      const alphabet = LowerCaseGuess[index];
      if (LowerCaseWord.includes(alphabet)) {
        LowerCaseWord.indexOf(alphabet) == LowerCaseGuess.indexOf(alphabet)
          ? CounterB++
          : CounterC++;
      }
    }
    return `${guess.toUpperCase()} C${CounterC}B${CounterB}`;
  } else {
    return "not a valid entry";
  }
};

const getWord = async function (length) {
  const words = (await Dictionary.getWords())
    .toString()
    .split("\n")
    .filter((word) => word.length === length)
    .filter((word) => isAlphabetsOnly(word))
    .filter((word) => !hasRepeatingLetters(word));
  const selection = Math.floor(Math.random() * words.length);
  return words[selection];
};

const CowsAndBulls = {
  getHint,
  getWord,
};

export default CowsAndBulls;
