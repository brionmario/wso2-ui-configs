module.exports = {
  env: {
    node: true,
  },
  extends: [
    'plugin:node/recommended',
    'plugin:@wso2/javascript',
    'plugin:@wso2/internal',
    'plugin:@wso2/strict',
    'plugin:@wso2/jest',
    'plugin:@wso2/prettier',
  ],
  overrides: [
    {
      env: {mocha: true},
      files: ['lib/**/__tests__/**/*.js'],
    },
  ],
  plugins: ['@wso2'],
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
