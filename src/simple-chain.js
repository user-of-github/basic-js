const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],

  getLength() {
    return this.array.length
  },
  addLink(value = '') {
    this.array.push(`( ${String(value)} )`)
    return this
  },
  removeLink(pos) {
    if (Number.isNaN(Number.parseInt(pos))) throw new Error("You can't remove incorrect link!")
    //if (String(Number.parseInt(pos)) !== pos) throw new Error("You can't remove incorrect link!") 
    const position = this.array.indexOf(item => item === `( ${String(pos)} )`) - 1
    //if (position === -1) throw new Error("You can't remove incorrect link!")

    this.array.splice(position, 1)
    return this
  },
  reverseChain() {
    this.array.reverse()
    return this
  },
  finishChain() {
    const response =  this.array.join('~~')
    
    while(this.array.length) this.array.pop()

    return response
  }
};

module.exports = {
  chainMaker
};

console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain() === '( 3rd )~~( function () { } )');