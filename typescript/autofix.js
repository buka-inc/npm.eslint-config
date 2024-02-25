module.exports = {
  "extends": ["../autofix.js"],
  // "parser": "@typescript-eslint/parser",
  // "plugins": ["@typescript-eslint"],
  "rules": {
    "semi": "off",
    "no-redeclare": "off",
    "@typescript-eslint/semi": [
      "error",
      "never"
    ],
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": [
      "error",
      "never"
    ],
    "indent": "off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "MemberExpression": 1,
        "ignoredNodes": [
          "FunctionExpression > .params[decorators.length > 0]",
          "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
          "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key"
        ]
      }
    ],
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
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "none"
        }
      }
    ]
  }
}
