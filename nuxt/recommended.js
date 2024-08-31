module.exports = [
  {
    languageOptions: {
      parserOptions: {
        project: true,
      }
    },

    rules: {
      '@typescript-eslint/consistent-type-imports': 'off',
      'vue/no-multiple-template-root': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          "allowHigherOrderFunctions": true,
          "allowExpressions": true,
          "allowTypedFunctionExpressions": true
        }
      ],
    }
  }
]
