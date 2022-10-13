
/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let response = 0
  for (let row = 0; row < matrix.length; ++row)
    for (let col = 0; col < matrix[row].length; ++col)
      if (matrix[row][col] === '^^')
        response += 1

  
  return response
}

module.exports = {
  countCats
};
