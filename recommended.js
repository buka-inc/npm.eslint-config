module.exports = {
  "extends": ["eslint:recommended", "./autofix.js"],
  "rules": {
    "eqeqeq": "error",
    "new-cap": "error",
    "prefer-spread": "error",
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ]
  }
}
