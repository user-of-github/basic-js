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
  const tryParseInt = Number.parseInt(sampleActivity)

  if (Number.isNaN(tryParseInt)) return false

  if(tryParseInt > MODERN_ACTIVITY) return false

  const tryResponse = Math.ceil(Math.log(MODERN_ACTIVITY / tryParseInt) * HALF_LIFE_PERIOD / APPROXIMATION)
  return Number.isFinite(tryResponse) && Number.isNaN(tryResponse) ? tryResponse : false
}



module.exports = {
  dateSample
};
