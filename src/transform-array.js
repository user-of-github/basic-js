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
function transform(arr) {
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!")

  const response = []
  let operation = ''

  arr.forEach(item => {
    //console.log(response);
    if (typeof item === 'string') {
      operation = item
      return
    }

    if (operation === '') {
      response.push(item)
      return
    }

    switch(operation) {
      case '--discard-next':
        break
      case '--discard-prev':
        response.length !== 0 && response.pop()
        response.push(item)
        break
      case '--double-next':
        response.push(item)
        response.push(item)
        break
      case '--double-prev':
        if (response.length !== 0) {
          const last = response[response.length - 1]
          response.push(last)
        } 
        response.push(item)
        break
      default:
        response.push(item)
        break
    }

    operation = ''
  })

  return response
}

module.exports = {
  transform
};


//console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));