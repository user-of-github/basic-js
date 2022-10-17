const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

const isControlSequence = str => str === '--discard-next' || str === '--discard-prev' || str === '--double-next' || str === '--double-prev'

const EMPTY_VALUE = 'undefinednull2022'


function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")

  const copy = Array.from(arr)

  let previousControlSequence = ''
  const response = []

  for (let index = 0; index < copy.length; ++index) {
    if (isControlSequence(copy[index])) {
      previousControlSequence = copy[index]

      if (copy[index] === '--discard-next' && index + 1 < copy.length) copy[index + 1] = EMPTY_VALUE
      if (copy[index] === '--discard-prev') response.length > 0 && index - 1 >= 0 && copy[index - 1] !== EMPTY_VALUE && response.pop()
      if (copy[index] === '--double-prev') index - 1 >= 0 && copy[index - 1] !== EMPTY_VALUE && response.push(copy[index - 1])

      continue
    }

    if (previousControlSequence === '--double-next') copy[index] !== EMPTY_VALUE && response.push(copy[index], copy[index])
    else copy[index] !== EMPTY_VALUE && response.push(copy[index])

    previousControlSequence = ''
  } 

  return response
}

module.exports = {
  transform
};
