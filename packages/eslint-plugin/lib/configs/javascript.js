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

/**
 * @fileoverview ESLint config to be used in JavaScript based projects.
 */

module.exports = {
  extends: [
    'plugin:wso2/core',
    'airbnb-base',
  ],
  rules: {
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
  }
};
