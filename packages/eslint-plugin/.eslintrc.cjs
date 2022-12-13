module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:node/recommended',
    require.resolve('./lib/configs/javascript'),
    require.resolve('./lib/configs/internal'),
    require.resolve('./lib/configs/prettier'),
  ],
  overrides: [
    {
      env: {mocha: true},
      files: ['lib/**/__tests__/**/*.js'],
    },
  ],
  root: true,
  rules: {
    'node/no-unpublished-require': [
      'error',
      {
        allowModules: [
          // This is located inside the mono-repo. Let's allow it.
          '@wso2/prettier-config',
        ],
      },
    ],
  },
};
