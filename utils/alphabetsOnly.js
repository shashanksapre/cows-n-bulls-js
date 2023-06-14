const isAlphabetsOnly = function (word) {
  return !word.match(/[^a-z]/g);
};

export default isAlphabetsOnly;
