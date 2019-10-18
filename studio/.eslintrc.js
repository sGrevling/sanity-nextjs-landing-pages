const path = require('path')

module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    "comma-dangle": ["error", "always-multiline"]
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.6'
    }
  }
}
