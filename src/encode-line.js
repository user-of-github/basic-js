const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 0
  let response = ''

  while (counter < str.length) {
    let furtherCounter = counter + 1

    while (furtherCounter < str.length && str.at(furtherCounter) === str.at(counter))
      ++furtherCounter
    
    if (furtherCounter !== counter + 1) response += (furtherCounter - counter)
    response += str.at(counter)

    counter = furtherCounter
  }


  return response
}

module.exports = {
  encodeLine
};
