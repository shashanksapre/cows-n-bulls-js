import CowsAndBulls from "../index.js";

describe("> Test Get Word for given length", () => {
  describe("Initial Positive test", () => {
    it("return a word", async () => {
      const result = await CowsAndBulls.getWord(4);
      expect(result).toHaveLength(4);
      expect(result).not.toMatch(/(.).*\1/);
    });
  });

  describe("Incorrect parameters tests", () => {
    it("don't send any parameter", async () => {
      const result = await CowsAndBulls.getWord();
      expect(result).toBe("length cannot be empty");
    });

    it("send NaN", async () => {
      const result = await CowsAndBulls.getWord("4");
      expect(result).toBe("length needs to be a number");
    });

    it("return a word", async () => {
      const result = await CowsAndBulls.getWord(3);
      expect(result).toBe("length needs to be more than 3");
    });
  });
});
