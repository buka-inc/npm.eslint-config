import { defineConfig } from 'eslint/config'
import recommended from './javascript/recommended.js'

export default defineConfig([{
  files: ['**/*.js'],
  extends: [recommended],
}])
