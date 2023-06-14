import inDictionary from "./utils/checkDictionary.js";
import hasRepeatingLetters from "./utils/repeatingLetters.js";
import isAlphabetsOnly from "./utils/alphabetsOnly.js";

const cowsAndBulls = async function (word, guess) {
  const LowerCaseGuess = guess.toLowerCase();
  const LowerCaseWord = word.toLowerCase();
  if (
    isAlphabetsOnly(LowerCaseGuess) &&
    !hasRepeatingLetters(LowerCaseGuess) &&
    (await inDictionary(LowerCaseGuess)) &&
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

export default cowsAndBulls;
