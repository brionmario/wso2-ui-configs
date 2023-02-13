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

/**
 * @fileoverview Entry point for the Prettier config.
 */

module.exports = {
  // TODO: Check the syntax here. We can import and pass here IMO.
  // eslint-disable-next-line global-require
  customSyntax: require('postcss-scss'),
  extends: ['stylelint-config-standard'],
  rules: {
    // CSS custom properties can have upper case letters. ex: var(--foo-borderRadius)
    // https://stylelint.io/user-guide/rules/custom-property-pattern/
    'custom-property-pattern': '^[a-z]+(-[a-zA-Z0-9]+)*$',
    // Some UI frameworks have CSS classes that starts with upper case letters. ex: MuiSelect
    // https://stylelint.io/user-guide/rules/selector-class-pattern/
    'selector-class-pattern': '^[a-zA-Z]+([-][a-zA-Z]+)*$',
  },
};
