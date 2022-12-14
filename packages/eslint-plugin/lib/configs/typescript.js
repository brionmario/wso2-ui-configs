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
  extends: ['plugin:@wso2/javascript', 'airbnb-typescript/base', 'plugin:typescript-sort-keys/recommended'],
  overrides: [
    {
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
      rules: {},
    },
  ],
  rules: {
    // This is a stricter rule. We can move it to the `strict` config and allow known places where dev-dependencies would be imported.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 'off',
  },
};
