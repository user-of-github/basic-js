const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const response = Array(arr.length).fill(undefined)

  // put -1 to their places

  for (let index = 0; index < arr.length; ++index)
    if (arr[index] === -1) response[index] = -1

  const sortedNormalValues = arr.filter(item => item !== -1).sort((a, b) => a - b)

  let lastIndex = 0

  for (let index = 0; index < response.length; ++index) {
    if (response[index] !== -1) {
      response[index] = sortedNormalValues[lastIndex]
      ++lastIndex
    }
  }

  return response
}

module.exports = {
  sortByHeight
};
