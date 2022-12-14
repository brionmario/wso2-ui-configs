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

const fs = require('fs');
const path = require('path');

/**
 * @fileoverview Entry point for the ESLint config.
 */

/**
 * Try to resolve a `tsconfig.json` file to avoid asking the user to provide one.
 */
const resolveTSConfig = () => {
  if (fs.existsSync('tsconfig.json')) {
    return path.resolve('tsconfig.json');
  }

  if (fs.existsSync('types/tsconfig.json')) {
    return path.resolve('types/tsconfig.json');
  }

  return undefined;
};

module.exports = {
  extends: ['plugin:@wso2/javascript'],
  overrides: [
    {
      extends: ['airbnb-typescript/base', 'plugin:typescript-sort-keys/recommended'],
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        project: resolveTSConfig(),
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        // Bit harsh rule, some developers will like to have consistent exports in a module.
        // If there are a mixture of export types, the imports will look ugly.
        // https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/prefer-default-export.md
        'import/prefer-default-export': 'off',
      },
    },
  ],
  rules: {},
};
