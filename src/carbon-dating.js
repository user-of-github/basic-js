const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  const APPROXIMATION = 0.693
  const tryParseFloat = Number.parseFloat(sampleActivity)

  if (Number.isNaN(tryParseFloat)) return false
  if (typeof sampleActivity !== 'string') return false

  if(tryParseFloat > MODERN_ACTIVITY) return false

  const tryResponse = Math.ceil(HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / tryParseFloat) / APPROXIMATION)

  return Number.isNaN(tryResponse) || tryResponse < 0 || tryResponse === Infinity || tryResponse === -Infinity ? false : tryResponse
}



module.exports = {
  dateSample
};
