const parserTs = require('@typescript-eslint/parser')
const js = require('../js')
const autofix = require('./autofix')
const tseslint = require('typescript-eslint')
const typescriptEslint = require('@typescript-eslint/eslint-plugin')


module.exports = [
  ...js.recommended.map(config => ({
    ...config,
    files: ['**/*.js', '**/*.ts'],
  })),

  ...tseslint.configs.recommended.map(config => ({
    ...config,
    files: ['**/*.ts'],
  })),

  ...autofix,

  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    "rules": {
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-redundant-type-constituents": "warn",
      "new-cap": [
        "error",
        {
          "capIsNew": false
        }
      ],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          "allowHigherOrderFunctions": true,
          "allowExpressions": true,
          "allowTypedFunctionExpressions": true
        }
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", {
        caughtErrors: "none",
      }],
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/restrict-template-expressions": ["error", {
        allowNumber: true,
      }],
      "no-dupe-class-members": "off",
      "@typescript-eslint/no-dupe-class-members": "error",
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": "error",
    }
  }
]
