const eslint = require('@eslint/js')
const autofix = require('./autofix')


module.exports = [
  eslint.configs.recommended,

  ...autofix,

  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    rules: {
      eqeqeq: 'error',
      'new-cap': 'error',
      'prefer-spread': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-unused-expressions': ['warn', { allowShortCircuit: true }],
    },
  },
]
