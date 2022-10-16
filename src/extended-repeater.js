const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const additionArray = []

  for (let counter = 0; counter < options.additionRepeatTimes; ++counter)
    additionArray.push(String(options.addition))
  
  const addition = additionArray.join(options.additionSeparator != null ? options.additionSeparator.toString() : '|')

  const strAndAddition = str + addition

  const responseArray = []

  for (let counter = 0; counter < options.repeatTimes; ++counter) responseArray.push(strAndAddition)

  return responseArray.join(options.separator != null ? options.separator.toString() : '+')
}

module.exports = {
  repeater
};
