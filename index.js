import inDictionary from "./utils/checkDictionary.js";
import hasRepeatingLetters from "./utils/repeatingLetters.js";
import isAlphabetsOnly from "./utils/alphabetsOnly.js";

const cowsAndBulls = function (word, guess) {
  const LowerCaseGuess = guess.toLowerCase();
  if (
    isAlphabetsOnly(LowerCaseGuess) &&
    !hasRepeatingLetters(LowerCaseGuess) &&
    inDictionary(LowerCaseGuess)
    
  ) {
    let CounterC = 0;
    let CounterB = 0;
    for (alpbabet in LowerCaseGuess) {
      if (word.includes(letter)) {
        word.indexOf(letter) == LowerCaseGuess.indexOf(letter)
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
