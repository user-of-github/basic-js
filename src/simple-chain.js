

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
    if(typeof(pos) != 'number'  || pos - 1 < 0 || pos > this.array.length) {
      while (this.array.length > 0) this.array.pop()
      throw new Error("You can't remove incorrect link!")
    }
    //if (String(Number.parseInt(pos)) !== pos) throw new Error("You can't remove incorrect link!") 
    const position = pos - 1
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
