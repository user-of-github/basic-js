const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  const parts = inputString.split('-')

  if (parts.length !== 6) return false

  const ACCEPTABLE = '0123456789ABCDEF'

  return parts.every(part => part.length === 2 && ACCEPTABLE.indexOf(part[0]) !== -1 && ACCEPTABLE.indexOf(part[1]) !== -1)
}

module.exports = {
  isMAC48Address
};
