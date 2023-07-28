import CowsAndBulls from "../index.js";

describe("> Test Get Hint for given word", () => {
  describe("Initial Positive test", () => {
    it("return a proper response", () => {
      const word = "bean";
      const guess = "spot";
      const result = CowsAndBulls.getHint(word, guess);
      expect(result.result.hint.match(`C[0-9]B[0-9]`));
    });
  });

  describe("Incorrect parameters tests", () => {
    it("provide no inputs", () => {
      const result = CowsAndBulls.getHint();
      expect(result.error).toBe("Input cannot be empty.");
    });

    it("provide one input", () => {
      const word = "bean";
      const result = CowsAndBulls.getHint(word);
      expect(result.error).toBe("Input cannot be empty.");
    });

    it("provide empty inputs", () => {
      const word = "";
      const guess = "";
      const result = CowsAndBulls.getHint(word, guess);
      expect(result.error).toBe("Input cannot be empty.");
    });

    it("provide non string inputs", () => {
      const word = 1;
      const guess = ["3"];
      const result = CowsAndBulls.getHint(word, guess);
      expect(result.error).toBe("Input can only be string.");
    });
  });

  describe("Incorrect Words test", () => {
    it("Not a correct English word test", () => {
      const word = "bean";
      const guess = "fuey";
      const result = CowsAndBulls.getHint(word, guess);
      expect(result.error).toBe("Guess does not belong in dictionary.");
    });

    it("Added numbers and special characters", () => {
      const word = "bean";
      const guess = "1cd/";
      const result = CowsAndBulls.getHint(word, guess);
      expect(result.error).toBe("Guess can only have alphabets.");
    });

    it("Different length of words", () => {
      const word = "bean";
      const guess = "speak";
      const result = CowsAndBulls.getHint(word, guess);
      expect(result.error).toBe(
        `Please guess word with ${word.length} alphabets.`
      );
    });

    it("repeating letters", () => {
      const word = "bean";
      const guess = "seen";
      const result = CowsAndBulls.getHint(word, guess);
      expect(result.error).toBe("Guess cannot have repeating alphabets.");
    });
  });
});
