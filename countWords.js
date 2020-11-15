const countWords = (inputWords) => {
  return inputWords.reduce((acc, word) => {
    if (!acc[word]) {
      acc[word] = 1;
    } else {
      acc[word] = acc[word] + 1;
    }
    return acc;
  }, {});
};
module.exports = countWords;
