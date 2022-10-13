

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //console.log(members);
  if (!Array.isArray(members)) return false

  const abbreviation = []

  members.forEach(member => {
    if (typeof member !== 'string') return
    const lettersSequence = Array.from(member)
    //console.log(lettersSequence)
    const withoutWhiteSpaces = lettersSequence.filter(letter => letter !== ' ').join('')
    withoutWhiteSpaces.length !== 0 && abbreviation.push(withoutWhiteSpaces[0].toUpperCase())
  })

  return abbreviation.sort().join('')
}

module.exports = {
  createDreamTeam
};


//console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));