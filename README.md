# @buka/eslint-config

| config                                         | Description |
| :--------------------------------------------- | :---------- |
| @buka/eslint-config/autofix                    |
| @buka/eslint-cofnig/recommended                |
| @buka/eslint-config/typescript/autofix         |
| @buka/eslint-config/typescript/recommended     |
| @buka/eslint-config/typescript/esm-recommended |

## Usage

```bash
npm install @buka/eslint-config
```

Add to eslint config:

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "@buka/eslint-config/typescript/recommended"
  ]
}
```
