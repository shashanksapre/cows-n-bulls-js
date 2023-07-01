import CowsAndBulls from "../index.js";

describe("> Test Get Hint for given word", () => {
  describe("Initial Positive test", () => {
    it("return a proper response", async () => {
      const word = "bean";
      const guess = "spot";
      const result = await CowsAndBulls.getHint(word, guess);
      expect(result.result.hint.match(`C[0-9]B[0-9]`));
    });
  });

  describe("Incorrect parameters tests", () => {
    it("provide no inputs", async () => {
      const result = await CowsAndBulls.getHint();
      expect(result.error).toBe("input cannot be empty");
    });

    it("provide one input", async () => {
      const word = "bean";
      const result = await CowsAndBulls.getHint(word);
      expect(result.error).toBe("input cannot be empty");
    });

    it("provide empty inputs", async () => {
      const word = "";
      const guess = "";
      const result = await CowsAndBulls.getHint(word, guess);
      expect(result.error).toBe("input cannot be empty");
    });

    it("provide non string inputs", async () => {
      const word = 1;
      const guess = ["3"];
      const result = await CowsAndBulls.getHint(word, guess);
      expect(result.error).toBe("input can only be string");
    });
  });

  describe("Incorrect Words test", () => {
    it("Not a correct English word test", async () => {
      const word = "bean";
      const guess = "fuey";
      const result = await CowsAndBulls.getHint(word, guess);
      expect(result.error).toBe("input does not belong in dictionary");
    });

    it("Added numbers and special characters", async () => {
      const word = "bean";
      const guess = "1cd/";
      const result = await CowsAndBulls.getHint(word, guess);
      expect(result.error).toBe("input can only be have alphabets");
    });

    it("Different length of words", async () => {
      const word = "bean";
      const guess = "speak";
      const result = await CowsAndBulls.getHint(word, guess);
      expect(result.error).toBe("input do not have same length");
    });

    it("repeating letters", async () => {
      const word = "bean";
      const guess = "seen";
      const result = await CowsAndBulls.getHint(word, guess);
      expect(result.error).toBe("input cannot have repeating");
    });
  });
});
