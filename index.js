import Dictionary from "./utils/dictionary.js";
import hasRepeatingLetters from "./utils/repeat.js";
import isAlphabetsOnly from "./utils/alphabets.js";

const getHint = async function (word, guess) {
  if (!word || word == "" || !guess || guess == "") {
    return {
      error: "input cannot be empty",
    };
  }
  if (typeof word != "string" || typeof guess != "string") {
    return {
      error: "input can only be string",
    };
  }
  const LowerCaseGuess = guess.toLowerCase();
  const LowerCaseWord = word.toLowerCase();
  if (!isAlphabetsOnly(LowerCaseGuess) || !isAlphabetsOnly(LowerCaseWord)) {
    return {
      error: "input can only be have alphabets",
    };
  }
  if (
    hasRepeatingLetters(LowerCaseGuess) ||
    hasRepeatingLetters(LowerCaseWord)
  ) {
    return {
      error: "input cannot have repeating alphabets",
    };
  }
  if (
    !(await Dictionary.isEnglishWord(LowerCaseGuess)) ||
    !(await Dictionary.isEnglishWord(LowerCaseWord))
  ) {
    return {
      error: "input does not belong in dictionary",
    };
  }
  if (guess.length != word.length) {
    return {
      error: "input do not have same length",
    };
  }
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
  return {
    result: {
      word: word.toUpperCase(),
      guess: guess.toUpperCase(),
      hint: `C${CounterC}B${CounterB}`,
    },
  };
};

const getWord = async function (length) {
  if (!length) {
    return "length cannot be empty";
  }
  if (typeof length != "number") {
    return "length needs to be a number";
  }
  if (length <= 3) {
    return "length needs to be more than 3";
  }
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
