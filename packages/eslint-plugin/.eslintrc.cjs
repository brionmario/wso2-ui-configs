module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:node/recommended',
    require.resolve('./lib/configs/javascript'),
  ],
  overrides: [
    {
      env: { mocha: true },
      files: ['lib/**/__tests__/**/*.js'],
    },
  ],
  root: true,
  rules: {
    'node/no-unpublished-require': [
      'error',
      {
        allowModules: ['@rushstack/eslint-patch'],
      },
    ],
  },
};
