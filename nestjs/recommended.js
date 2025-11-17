import globals from 'globals'
import typescript_recommended from '../typescript/recommended.js'


export default [
  ...typescript_recommended,
  {
    rules: {
      // MikroORM 中需要频繁使用 `& Opt`，开启此规则会导致无法断言。
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',

      // NestJS Services 通常是异步的，即使当前没有使用 await，未来可能会添加异步操作。
      // 这样做可以避免调用添加异步操作时，需要修改整个调用链的问题。
      '@typescript-eslint/require-await': 'off',
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
