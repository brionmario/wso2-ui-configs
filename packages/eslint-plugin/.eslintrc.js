'use strict';

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:node/recommended',
    require.resolve('./lib/configs/javascript'),
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['lib/**/__tests__/**/*.js'],
      env: { mocha: true },
    },
  ],
  rules: {
    'node/no-unpublished-require': [
      'error',
      {
        allowModules: ['@rushstack/eslint-patch'],
      },
    ],
  },
};
