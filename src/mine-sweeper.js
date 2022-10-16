const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const copy = []
  const wideResponse = []
  
  copy.push(new Array(matrix[0].length + 2).fill(false))
  wideResponse.push(new Array(matrix[0].length + 2).fill(0))

  for (let row = 0; row < matrix.length; ++row) {
    const newRow = [false]

    for (let col = 0; col < matrix[row].length; ++col) {
      newRow.push(matrix[row][col])
    }

    newRow.push(false)
    copy.push(newRow)
    wideResponse.push(new Array(matrix[0].length + 2).fill(0))
  }

  copy.push(new Array(matrix[0].length + 2).fill(false))
  wideResponse.push(new Array(matrix[0].length + 2).fill(0))

  for (let row = 1; row < wideResponse.length - 1; ++row) {
    for (let col = 1; col < wideResponse[row].length - 1; ++col) {
      wideResponse[row][col] += Number(copy[row - 1][col - 1])
      wideResponse[row][col] += Number(copy[row - 1][col])
      wideResponse[row][col] += Number(copy[row - 1][col + 1])
      wideResponse[row][col] += Number(copy[row][col + 1])
      wideResponse[row][col] += Number(copy[row + 1][col + 1])
      wideResponse[row][col] += Number(copy[row + 1][col])
      wideResponse[row][col] += Number(copy[row + 1][col - 1])
      wideResponse[row][col] += Number(copy[row][col - 1])
    }
  }

  const response = []

  for (let row = 1; row < wideResponse.length - 1; ++row) {
    const tempRow = Array.from(wideResponse[row])
    tempRow.shift()
    tempRow.pop()
    response.push(tempRow)
  }

  return response
}

module.exports = {
  minesweeper
};

minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false]
 ])