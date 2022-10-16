const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const response = {}

  domains.forEach(domain => {
    const splitted = domain.split('.').reverse()
    const stringSum = []
    splitted.forEach(item => {
      stringSum.push(item)
      const key = '.' + stringSum.join('.')

      if (!response.hasOwnProperty(key)) response[key] = 0

      ++response[key]
    })
  })

  return response
}

module.exports = {
  getDNSStats
};
