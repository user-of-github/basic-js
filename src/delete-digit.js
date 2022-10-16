const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let response = 0
  const stringView = n.toString()

  for (let index = 0; index < stringView.length; ++index) {
    const newNumberStringView = stringView.slice(0, index) + stringView.slice(index + 1, stringView.length)
    const newNumber = Number.parseInt(newNumberStringView)
    response = Math.max(response, newNumber)
  }

  return response
}

module.exports = {
  deleteDigit
};
