import words from "./lib/dict.js";

const getHint = function (word, guess) {
  if (!guess || guess == "") {
    return {
      error: "Input cannot be empty.",
    };
  }
  if (typeof guess != "string") {
    return {
      error: "Input can only be string.",
    };
  }
  if (guess.length != word.length) {
    return {
      error: `Please guess word with ${word.length} alphabets.`,
    };
  }
  const LowerCaseGuess = guess.toLowerCase();
  const LowerCaseWord = word.toLowerCase();
  if (LowerCaseGuess.match(/[^a-z]/g)) {
    return {
      error: "Guess can only have alphabets.",
    };
  }
  if (words.offensive.includes(LowerCaseGuess)) {
    return {
      error: "Please avoid using offensive/profane words.",
    };
  }
  if (/(.).*\1/.test(LowerCaseGuess)) {
    return {
      error: "Guess cannot have repeating alphabets.",
    };
  }
  if (
    !words.valid.includes(LowerCaseGuess) &&
    !words.invalid.includes(LowerCaseGuess)
  ) {
    return {
      error: "Guess does not belong in dictionary.",
    };
  }
  if (
    words.invalid.includes(LowerCaseGuess) &&
    !words.valid.includes(LowerCaseGuess)
  ) {
    return {
      error: "Abbreviations, Proper Names, Contractions, etc. are not allowed.",
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

const getWord = function (length) {
  if (!length) {
    return "length cannot be empty";
  }
  if (typeof length != "number") {
    return "length needs to be a number";
  }
  if (length <= 3) {
    return "length needs to be more than 3";
  }
  const wordList = words.valid.filter((word) => word.length === length);
  const selection = Math.floor(Math.random() * wordList.length);
  return wordList[selection];
};

const CowsAndBulls = {
  getHint,
  getWord,
};

export default CowsAndBulls;
