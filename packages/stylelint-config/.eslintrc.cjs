module.exports = {
  env: {
    node: true,
  },
  plugins: ['@wso2'],
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:node/recommended',
    'plugin:@wso2/javascript',
    'plugin:@wso2/react',
    'plugin:@wso2/internal',
    'plugin:@wso2/jest',
    'plugin:@wso2/prettier',
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
