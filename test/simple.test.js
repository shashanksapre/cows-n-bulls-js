import CowsAndBulls from "../index.js";

describe("Initial Simple test", () => {
  it("return a proper response", async () => {
    const word = "bean";
    const guess = "spot";
    const result = await CowsAndBulls.getHint(word, guess);
    expect(result.match(`${guess.toUpperCase}\sC[0-9]B[0-9]`));
  });
});

describe("Incorrect Entries test", () => {
  it("Not a correct English word test", async () => {
    const word = "bean";
    const guess = "fuey";
    const result = await CowsAndBulls.getHint(word, guess);
    expect(result).toBe("not a valid entry");
  });

  it("Added numbers and special characters", async () => {
    const word = "bean";
    const guess = "1cd)";
    const result = await CowsAndBulls.getHint(word, guess);
    expect(result).toBe("not a valid entry");
  });

  it("Different length of words", async () => {
    const word = "bean";
    const guess = "speak";
    const result = await CowsAndBulls.getHint(word, guess);
    expect(result).toBe("not a valid entry");
  });

  it("repeating letters", async () => {
    const word = "bean";
    const guess = "seen";
    const result = await CowsAndBulls.getHint(word, guess);
    expect(result).toBe("not a valid entry");
  });
});

describe("get word for game", () => {
  it("return a word", async () => {
    const word = await CowsAndBulls.getWord(4);
    expect(word).toHaveLength(4);
    expect(word).not.toMatch(/(.).*\1/);
  });
});
