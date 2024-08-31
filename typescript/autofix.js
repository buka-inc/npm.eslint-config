const parserTs = require('@typescript-eslint/parser')
const js = require('../js')
const stylistic = require('@stylistic/eslint-plugin')
const typescriptEslint = require('@typescript-eslint/eslint-plugin')



module.exports = [
  ...js.autofix.map(config => ({
    ...config,
    files: ['**/*.js', '**/*.ts'],
  })),

  {
    files: ['**/*.ts'],

    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: true,
      },
    },

    plugins: {
      '@stylistic': stylistic,
      '@typescript-eslint': typescriptEslint,
    },

    "rules": {
      "no-redeclare": "off",
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          "overrides": {
            "accessors": "off",
            "constructors": "off",
            "properties": "no-public",
            "methods": "no-public"
          }
        }
      ],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          "multiline": {
            "delimiter": "none"
          }
        }
      ]
    }
  }
]
