const R = require('ramda')


module.exports = function merge(source, extend) {
  if (Array.isArray(source)) {
    return source.map((c) => R.mergeDeepRight(c, extend))
  }

  return [R.mergeDeepRight(source, extend)]
}
