import globals from 'globals'
import typescript_recommended from '../typescript/recommended.js'


export default [
  ...typescript_recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
