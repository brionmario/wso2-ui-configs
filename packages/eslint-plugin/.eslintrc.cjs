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

module.exports = {
  env: {
    node: true,
  },
  extends: [
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
