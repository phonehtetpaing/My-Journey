module.exports = {
  env: {
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'max-len': ['warn', { code: 200 }],
    'import/extensions': ['off', { js: 'always' }],
    'import/prefer-default-export': ['off'],
    'no-underscore-dangle': ['off'],
    'no-unused-vars': ['error', { varsIgnorePattern: '^_$' }],
  },
};
