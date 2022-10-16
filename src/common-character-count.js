const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const getMapWithLetters = str => {
    const response = new Map()
    for (let index = 0; index < str.length; ++index) {
      if (!response.has(str[index])) response.set(str[index], 0)

      response.set(str[index], response.get(str[index]) + 1)
    }
    return response
  }

  const firstWordLetters = getMapWithLetters(s1)

  let response = 0

  for (let index = 0; index < s2.length; ++index) {
    const letter = s2[index]

    if (!firstWordLetters.has(letter)) continue

    if (firstWordLetters.get(letter) > 0) {
      response += 1
      firstWordLetters.set(letter, firstWordLetters.get(letter) - 1)
    }
  }

  return response
}

module.exports = {
  getCommonCharacterCount
};
