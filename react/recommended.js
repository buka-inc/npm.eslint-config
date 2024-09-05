const js = require('../js')
const typescript = require('../typescript')
const merge = require('../utils/merge')
const globals = require('globals')
const react = require('eslint-plugin-react')
const reactHook = require('eslint-plugin-react-hooks')


module.exports = [
  ...merge(js.recommended, {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  }),

  ...merge(typescript.recommended, {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  }),

  react.configs.flat.recommended,

  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
      react,
      'react-hooks': reactHook,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-equals-spacing': 'error',
      'react/jsx-max-props-per-line': ['error', { maximum: 2 }],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
    },
  },
]
