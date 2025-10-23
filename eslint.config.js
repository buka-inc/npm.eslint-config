import { defineConfig } from 'eslint/config'
import recommended from './js/recommended.js'

export default defineConfig([{
  files: ['**/*.js'],
  extends: [recommended],
}])
