import js from '@eslint/js'
import js_fixable from './fixable.js'


export default [
  js.configs.recommended,

  ...js_fixable,

  {
    name: '@buka/eslint-config/js/recommended',
    rules: {
      eqeqeq: 'error',
      'new-cap': 'error',
      'prefer-spread': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-unused-expressions': ['warn', { allowShortCircuit: true }],
    },
  },
]

