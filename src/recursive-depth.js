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
  console.log('ELEMENT: ', item, ' ', initial)
  if (!Array.isArray(item)) return initial

  if (item.length === 0) return initial + 1
  return initial + Math.max(...item.map(element => Array.isArray(element) ? depth(initial, element) : 0)) + 1
}


class DepthCalculator {
  calculateDepth(arr) {
    return depth(0, arr)
  }
}

module.exports = {
  DepthCalculator
};

console.log(new DepthCalculator().calculateDepth([[[[[[[[[[]]]]]]]]]]));
