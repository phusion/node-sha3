module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'eslint-plugin-ante'
  ],
  rules: {
    'no-magic-numbers': ['off'],
    'prefer-destructuring': ['off']
  }
};
