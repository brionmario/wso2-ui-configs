/**
 * Copyright (c) 2022, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

'use strict';

const fs = require('fs');
const path = require('path');

/**
 * @fileoverview Entry point for the ESLint config.
 */

// Try to resolve a `tsconfig.json` file to avoid asking the user to provide one.
const tsConfig = fs.existsSync('tsconfig.json')
  ? path.resolve('tsconfig.json')
  : fs.existsSync('types/tsconfig.json')
  ? path.resolve('types/tsconfig.json')
  : undefined;

module.exports = {
  extends: [require.resolve('./base'), 'airbnb'],
  // NOTE: When adding rules here, you need to make sure they are compatible with
  // `typescript-eslint`, as some rules such as `no-array-constructor` aren't compatible.
  rules: {
    // We need prop spreading when writing wrapper components.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': 'off',
    // We prefer to write functional components as arrow-functions.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
    // JSX can be in `mdx` files as well.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.jsx', '.jsx', '.mdx'] },
    ],
    // Allow dev dependencies to be used in test specs and storybook files.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.?(j|t)s',
          '**/*.spec.?(j|t)s',
          '**/*.stories.?(j|t)s?(x)',
          '**/*.stories.mdx',
        ],
      },
    ],
    // Bit harsh rule, some developers will like to have consistent exports in a module.
    // If there are a mixture of export types, the imports will look ugly.
    // https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',
    // Enforces sorting object properties in alphabetical order for readability.
    // https://eslint.org/docs/latest/rules/sort-keys
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, natural: false, minKeys: 2 },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['airbnb-typescript', 'plugin:typescript-sort-keys/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: tsConfig,
        ecmaFeatures: {
          jsx: true,
        },
        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      // If adding a typescript-eslint version of an existing ESLint rule,
      // make sure to disable the ESLint rule here.
      rules: {
        'react/default-props-match-prop-types': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
};
