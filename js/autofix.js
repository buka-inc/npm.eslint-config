const stylistic = require('@stylistic/eslint-plugin')


module.exports = [
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],

    plugins: {
      '@stylistic': stylistic,
    },

    rules: {
      'no-div-regex': 'error',
      'no-else-return': 'error',
      'no-implicit-coercion': ['error', { boolean: false }],
      'no-lonely-if': 'error',
      'no-unneeded-ternary': 'error',
      'no-useless-computed-key': 'error',
      'no-var': 'error',
      // 'no-unused-vars': ['warn', { caughtErrors: 'none' }],
      'prefer-const': 'error',
      'prefer-template': 'error',
      'prefer-object-spread': 'error',
      curly: ['error', 'multi-line', 'consistent'],
      yoda: ['error', 'never'],


      '@stylistic/no-confusing-arrow': 'error',
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-multiple-empty-lines': [
        'error',
        {
          max: 2,
        },
      ],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-tabs': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/nonblock-statement-body-position': 'error',

      '@stylistic/line-comment-position': ['error', 'above'],
      // 会导致vscode的vim插件的gcc指令无法解除注释
      // "multiline-comment-style": ["error", "starred-block"],
      // typescript 的特殊注释需要三个反斜杠
      '@stylistic/spaced-comment': ['error', 'always', { markers: ['/'] }],

      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/array-element-newline': ['error', 'consistent'],

      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
      'arrow-body-style': ['error', 'as-needed'],

      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/comma-style': ['error', 'last'],

      '@stylistic/func-call-spacing': ['error', 'never'],
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],

      '@stylistic/key-spacing': [
        'error',
        {
          afterColon: true,
          beforeColon: false,
          mode: 'strict',
        },
      ],
      '@stylistic/keyword-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],

      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/object-curly-newline': [
        'error',
        {
          multiline: true,
          consistent: true,
        },
      ],

      '@stylistic/space-before-blocks': ['error', 'always'],
      '@stylistic/space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],

      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/space-unary-ops': 'error',

      '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/template-curly-spacing': ['error', 'never'],
      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/block-spacing': ['error', 'always'],
      '@stylistic/implicit-arrow-linebreak': 'error',

      '@stylistic/indent': [
        'error',
        2,
        {
          MemberExpression: 1,
          ignoredNodes: [
            'FunctionExpression > .params[decorators.length > 0]',
            'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
            'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
          ],
        },
      ],
      '@stylistic/one-var-declaration-per-line': ['error', 'initializations'],
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/new-parens': 'error',
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    },
  },
]
