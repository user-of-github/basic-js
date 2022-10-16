const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  const excludedCols = new Set()

  let response = 0

  for (let row = 0; row < matrix.length; ++row) {
    for (let col = 0; col < matrix[row].length; ++col) {
        if (excludedCols.has(col)) continue
        if (matrix[row][col] === 0) excludedCols.add(col)
        if (matrix[row][col] !== 0 && !excludedCols.has(col)) response += matrix[row][col]
    }
  }

  return response
}


module.exports = {
  getMatrixElementsSum
};
