const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const getDigitsSum = strView => Array.from(strView).reduce((result, current) => result + Number.parseInt(current), 0)
  const getSumLength = sum => sum.toString().length

  let stringView = n.toString()
  let sum = getDigitsSum(stringView)
  let sumLength = getSumLength(sum)

  while (sumLength >= 2) {
    stringView = sum.toString()
    sum = getDigitsSum(stringView)
    sumLength = getSumLength(sum)
  }

  return sum

}

module.exports = {
  getSumOfDigits
};
