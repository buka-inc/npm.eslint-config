import globals from 'globals'
import typescript_recommended from '../typescript/recommended.js'


export default [
  ...typescript_recommended,
  {
    rules: {
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
