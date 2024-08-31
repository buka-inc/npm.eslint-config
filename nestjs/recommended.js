const globals = require('globals')
const ts = require('../typescript')

module.exports = [
  ...ts.recommended,
  {
    files: ['**/*.js', '**/*.ts', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  }
]
