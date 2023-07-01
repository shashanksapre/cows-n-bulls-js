import CowsAndBulls from "../index.js";

describe("> Test Get Word for given length", () => {
  describe("Initial Positive test", () => {
    it("return a word", async () => {
      const word = await CowsAndBulls.getWord(4);
      expect(word).toHaveLength(4);
      expect(word).not.toMatch(/(.).*\1/);
    });
  });
});
