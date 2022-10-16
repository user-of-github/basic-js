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
function transform(/*arr*/) {
  /*if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!")

  const copy = Array.from(arr)

  const response = []
  let operation = ''

  let index = 0

  while (index < copy.length) {
    const current = copy[index]

    if (typeof current === 'string') operation = current

    if (operation === '' && current !== undefined) {
      response.push(current)
      continue
    }
    if (operation === '--discard-next') {
      if (index + 1 < copy.length) copy[index + 1] = undefined
      index += 2
      continue
    }
    if (operation === '--discard-prev') {
      if (index - 1 < copy.length) copy[index + 1] = undefined
      index += 2
      continue
    }

  }


  return response*/

  throw new NotImplementedError('Not implemented');
}

module.exports = {
  transform
};
