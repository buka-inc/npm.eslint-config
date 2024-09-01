const globals = require('globals');

module.exports = [
  ...require('./js/recommended'),
  {
    languageOptions: {
      globals: globals.node
    }
  }
]
