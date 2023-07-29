module.exports = {
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "./autofix.js",
    "../recommended.js"
  ],
  "rules": {
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
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
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/ban-ts-comment": "warn",
    '@typescript-eslint/restrict-template-expressions': ['error', {
      allowNumber: true,
    }],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
  }
}
