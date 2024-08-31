# @buka/eslint-config

[npm]: https://www.npmjs.com/package/@buka/eslint-config
[Buka]: https://github.com/buka-lnc

[![version](https://img.shields.io/npm/v/@buka/eslint-config.svg?logo=npm&style=for-the-badge)][npm]
[![downloads](https://img.shields.io/npm/dm/@buka/eslint-config.svg?logo=npm&style=for-the-badge)][npm]
[![dependencies](https://img.shields.io/librariesio/release/npm/@buka/eslint-config?logo=npm&style=for-the-badge)][npm]
[![license](https://img.shields.io/npm/l/@buka/eslint-config.svg?logo=github&style=for-the-badge)][npm]

[Buka][Buka] 基准 Eslint 规则，需要`eslint > 9`。

`@buka/eslint-config` 提供四种适用于不同场景的 eslint 规则：

- 适用于 `.js` 文件的通用的 eslint 规则。
- 适用于 `.ts` 文件的通用的 eslint 规则。
- 适用于 [nuxt](https://nuxt.com/) 的 eslint 规则。
- 适用于 [nestjs](https://nestjs.com/) 的 eslint 规则。

> 部分场景除`recommended`之外，还提供了其他选项。
> 但并不建议使用其他选项，除非你清楚的知道自己想要做什么。

## js

```javascript
// eslint.config.mjs
import buka from "@buka/eslint-config";

export default [...buka.js.recommend];
```

| config                | Description                                                                                   |
| :-------------------- | :-------------------------------------------------------------------------------------------- |
| `buka.js.autofix`     | 仅包含 eslint 支持 autofix 的规则                                                             |
| `buka.js.recommended` | 包含 @eslint/js 的 recommended 规则 和 buka.js.autofix 规则。并增加 [Buka][Buka] 推荐的规则。 |

## typescript

```javascript
// eslint.config.mjs
import buka from "@buka/eslint-config";

export default [...buka.typescript.recommend];
```

| config                        | Description                                                                                                   |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------ |
| `buka.typescript.autofix`     | 仅包含 eslint 和 @typescript-eslint 支持 autofix 的规则                                                       |
| `buka.typescript.recommended` | 包含 @typescript-eslint 的 recommended 规则 和 buka.typescript.autofix 规则。并增加 [Buka][Buka] 推荐的规则。 |

## nuxt

此规则需要配合[`nuxt@3`](https://nuxt.com/) 和 `@nuxt/eslint` 使用。

```javascript
// eslint.config.mjs
import buka from "@buka/eslint-config";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(...buka.nuxt.recommended);
```

| config                  | Description                    |
| :---------------------- | :----------------------------- |
| `buka.nuxt.recommended` | 增加 [Buka][Buka] 推荐的规则。 |

## nestjs

此规则需要配合 [Nestjs](https://nestjs.com/) 使用。

| config                    | Description                                                         |
| :------------------------ | :------------------------------------------------------------------ |
| `buka.nestjs.recommended` | 在 `buka.typescript.recommended` 规则上，增加了 NestJS 需要的配置。 |
