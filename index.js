import javascript_fixable from './javascript/fixable.js'
import javascript_recommended from './javascript/recommended.js'
import nestjs_recommended from './nestjs/recommended.js'
import typescript_fixable from './typescript/fixable.js'
import typescript_recommended from './typescript/recommended.js'

export default {
  typescript: {
    recommended: typescript_recommended,
    fixable: typescript_fixable,
  },

  javascript: {
    recommended: javascript_recommended,
    fixable: javascript_fixable,
  },

  nestjs: {
    recommended: nestjs_recommended,
  },
}
