import js from '@eslint/js'
import stylistic_fixable from '../stylistic/fixable.js'


export default [
  ...stylistic_fixable,
  {
    name: '@buka/eslint-config/js/fixable',

    plugins: { js },

    rules: {
      'no-div-regex': 'error',
      'no-else-return': 'error',
      'no-implicit-coercion': ['error', { boolean: false }],
      'no-lonely-if': 'error',
      'no-unneeded-ternary': 'error',
      'no-useless-computed-key': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'prefer-object-spread': 'error',
      curly: ['error', 'multi-line', 'consistent'],
      yoda: ['error', 'never'],
      'arrow-body-style': ['error', 'as-needed'],
    },
  },
]
