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

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const config = require('../../index');

describe('check shareable config', () => {
  it('correctly exports every config from the module', () => {
    const KNOWN_FILES_TO_IGNORE = ['__tests__'];
    const exportedConfigs = new Set(Object.keys(config.configs));
    const files = new Set(
      fs
        .readdirSync(path.resolve(path.join(__dirname, '..')))
        .map(f => {
          if (KNOWN_FILES_TO_IGNORE.includes(f)) {
            return undefined;
          }

          return path.basename(f, path.extname(f));
        })
        .filter(Boolean),
    );
    assert.deepEqual(files, exportedConfigs);
  });
});
