import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'

import stylistic_fixable from '../stylistic/fixable.js'


export default [
  stylistic_fixable,

  {
    name: '@buka/eslint-config/typescript/fixable',
    languageOptions: {
      parser: typescriptEslintParser,
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
    },

    rules: {
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          overrides: {
            accessors: 'off',
            constructors: 'off',
            properties: 'no-public',
            methods: 'no-public',
          },
        },
      ],
    },
  },
]
