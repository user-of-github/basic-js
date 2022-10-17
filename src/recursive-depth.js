const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

const depth = (initial, item) => {

  if (!Array.isArray(item)) return initial

  if (item.length === 0) return initial + 1
  return initial + Math.max(...item.map(element => Array.isArray(element) ? depth(initial, element) : 0)) + 1
}


class DepthCalculator {
  calculateDepth(arr, initial = 0) {
    if (!Array.isArray(arr)) return initial

    if (arr.length === 0) return initial + 1
    return initial + Math.max(...arr.map(element => Array.isArray(element) ? this.calculateDepth(element, initial) : 0)) + 1
  }
}

module.exports = {
  DepthCalculator
};

//console.log(new DepthCalculator().calculateDepth([[[[[[[[[[]]]]]]]]]]));
