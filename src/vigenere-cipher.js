const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
      this.direct = direct
      this.allAlphabets = VigenereCipheringMachine.generateAlphabets()
  }

  encrypt(message, key) {

    if (key === undefined || message === undefined) throw new Error('Incorrect arguments!')

    let repeatedKey = ''

    while (repeatedKey.length < message.length) repeatedKey += key.toUpperCase()

    for (let spaceIndex = 0; spaceIndex < message.length; ++spaceIndex) {
      //console.log(message[spaceIndex], VigenereCipheringMachine.alphabet.indexOf(message[spaceIndex]));
      if (VigenereCipheringMachine.alphabet.indexOf(message[spaceIndex].toUpperCase()) === -1) {
        repeatedKey = repeatedKey.slice(0, spaceIndex) + '!' + repeatedKey.slice(spaceIndex)
      }
    }

    repeatedKey = repeatedKey.slice(0, message.length)


    let response = ''

    for (let index = 0; index < message.length; ++index) {
      if (VigenereCipheringMachine.alphabet.indexOf(message[index].toUpperCase()) === -1) {
        response += message[index]
        continue
      }
      const alphabetNumber = VigenereCipheringMachine.alphabet.indexOf(repeatedKey[index].toUpperCase())
      const letterFromMessagePositionInDefaultAlphabet = VigenereCipheringMachine.alphabet.indexOf(message[index].toUpperCase())

      const accordingLetterInNewAlphabet = this.allAlphabets[alphabetNumber][letterFromMessagePositionInDefaultAlphabet]

      response += accordingLetterInNewAlphabet
    }

    return this.direct ? response : Array.from(response).reverse().join('')
  }
  decrypt(encryptedMessage, key) {
    if (key === undefined || encryptedMessage === undefined) throw new Error('Incorrect arguments!')

    let repeatedKey = ''

    while (repeatedKey.length < encryptedMessage.length) repeatedKey += key.toUpperCase()

    for (let spaceIndex = 0; spaceIndex < encryptedMessage.length; ++spaceIndex) {
      //console.log(message[spaceIndex], VigenereCipheringMachine.alphabet.indexOf(message[spaceIndex]));
      if (VigenereCipheringMachine.alphabet.indexOf(encryptedMessage[spaceIndex].toUpperCase()) === -1) {
        repeatedKey = repeatedKey.slice(0, spaceIndex) + '!' + repeatedKey.slice(spaceIndex)
      }
    }

    repeatedKey = repeatedKey.slice(0, encryptedMessage.length)

    let response = ''

    for (let index = 0; index < encryptedMessage.length; ++index) {
      if (VigenereCipheringMachine.alphabet.indexOf(encryptedMessage[index].toUpperCase()) === -1) {
        response += encryptedMessage[index]
        continue
      }


      const alphabetNumber = VigenereCipheringMachine.alphabet.indexOf(repeatedKey[index].toUpperCase())

      const accordingLetterPositionInEncryptedAlphabet = this.allAlphabets[alphabetNumber].indexOf(encryptedMessage[index])

      const accordingLetterInTraditionalAlphabet = this.allAlphabets[0][accordingLetterPositionInEncryptedAlphabet]

      response += accordingLetterInTraditionalAlphabet
    }

    return this.direct ? response : Array.from(response).reverse().join('')
  }

  static alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 

  static generateAlphabets() {
    const response = []
  
    const forShift = Array.from(VigenereCipheringMachine.alphabet)
  
    const shiftRangeLeft = () => {
      const firstItem = forShift[0]
  
      for (let index = 0; index < forShift.length - 1; ++index)
        forShift[index] = forShift[index + 1]
  
      forShift[forShift.length - 1] = firstItem
    }
  
    response.push(Array.from(forShift))
  
    for (let counter = 0; counter < 25; ++counter) {
      shiftRangeLeft()
      response.push(Array.from(forShift))
    }
  
    return response
  }
}




module.exports = {
  VigenereCipheringMachine
};


const a = new VigenereCipheringMachine()

console.log(a.encrypt('attack at dawn!', 'alphonse'));