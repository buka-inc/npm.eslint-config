# @buka/eslint-config

[npm]: https://www.npmjs.com/package/@buka/eslint-config
[Buka]: https://github.com/buka-lnc

[![version](https://img.shields.io/npm/v/@buka/eslint-config.svg?logo=npm&style=for-the-badge)][npm]
[![downloads](https://img.shields.io/npm/dm/@buka/eslint-config.svg?logo=npm&style=for-the-badge)][npm]
[![dependencies](https://img.shields.io/librariesio/release/npm/@buka/eslint-config?logo=npm&style=for-the-badge)][npm]
[![license](https://img.shields.io/npm/l/@buka/eslint-config.svg?logo=github&style=for-the-badge)][npm]

[Buka][Buka] 基准 Eslint 规则，需要`eslint > 9`。

`@buka/eslint-config` 提供三种适用于不同场景的 eslint 规则：

- 适用于 `.js` 文件的通用的 eslint 规则。
- 适用于 `.ts` 文件的通用的 eslint 规则。
- 适用于 [nestjs](https://nestjs.com/) 的 eslint 规则。

## javascript

```javascript
// eslint.config.mjs
import buka from "@buka/eslint-config";

export default [
  {
    files: ["**/*.js"],
    extends: [buka.javascript.recommended],
  },
];
```

| Config                        | Description                                                                 |
| :---------------------------- | :-------------------------------------------------------------------------- |
| `buka.javascript.fixable`     | 仅包含 `@eslint/js` 和 `@stylistic/eslint-plugin` 支持 `--fix` 的规则       |
| `buka.javascript.recommended` | 包含 `@eslint/js` 的 `recommended` 规则 和 `buka.javascript.fixable` 规则。 |

## typescript

```javascript
// eslint.config.mjs
import buka from "@buka/eslint-config";

export default [
  {
    files: ["**/*.ts"],
    extends: [buka.typescript.recommended],
  },
];
```

| Config                        | Description                                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------- |
| `buka.typescript.fixable`     | 包含 `@eslint/js` 、`@stylistic/eslint-plugin` 和 `@typescript-eslint` 支持 `--fix` 的规则。 |
| `buka.typescript.recommended` | 包含 `@typescript-eslint` 的 `recommended` 规则 和 `buka.typescript.fixable` 规则。          |

## nestjs

此规则需要配合 [Nestjs](https://nestjs.com/) 使用。

```javascript
// eslint.config.mjs
import buka from "@buka/eslint-config";

export default [
  {
    files: ["**/*.ts"],
    extends: [buka.typescript.recommended],
  },
];
```

| Config                    | Description                                                               |
| :------------------------ | :------------------------------------------------------------------------ |
| `buka.nestjs.recommended` | 在 `buka.typescript.recommended` 规则上，添加了适配 `NestJS` 的 `rules`。 |
