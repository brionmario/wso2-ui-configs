<p align="center" style="color: #343a40">
  <h1 align="center">
    <img src="https://wso2.cachefly.net/wso2/sites/all/2020-theme/images/wso2-logo.svg" alt="Emotion logo" height="25" width="auto" style="margin-right: 10px">
    UI Configs
  </h1>
</p>
<p align="center" style="font-size: 1.2rem;">The
Shareable configurations to maintain consistency across <a href="https://wso2.com">WSO2</a> UI code bases.</p>

<div align="center">
  <a href="https://stackoverflow.com/questions/tagged/wso2is"><img src="https://img.shields.io/badge/Ask%20for%20help%20on-Stackoverflow-orange" alt="Stackoverflow"></a>
  <a href="https://discord.gg/wso2"><img src="https://img.shields.io/badge/Join%20us%20on-Discord-%23e01563.svg" alt="Discord"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License"></a>

  <br>
  <br>

🚧 This project is still a work in progress. Please do not use this in production 🚧

</div>

<br>

This repository contains the source code of the different configurations that are used in WSO2 UI code bases. These
configurations ensure that the code base maintains a consistent style guide whilst adhering to the industry best
practices.

## Packages

- [`@wso2/eslint-plugin`](./packages/eslint-plugin/) - Shareable ESLint configurations & rules used in WSO2 code bases
- [`@wso2/prettier-config`](./packages/prettier-config/) - Shareable Prettier configurations used in WSO2 code bases
- [`@wso2/stylelint-config`](./packages/stylelint-config/) - Shareable Stylelint configurations used in WSO2 code bases
- `@wso2/typescript-config` [TODO 🦄] - Shareable TSConfig presets to be used in WSO2 code bases
- `@wso2/jest-preset` [TODO 🦄] - Shareable Jest presets to be used in WSO2 code bases
- `@wso2/postcss-config` [TODO 🦄] - Shareable PostCSS config to be used in WSO2 code bases

## Contributing

Want to report a bug, contribute some code, or improve the documentation?

Excellent! Read up on our [guidelines for contributing](./CONTRIBUTING.md) to get started.

## License

Licenses this source under the Apache License, Version 2.0 [LICENSE](./LICENSE), You may not use this file except in
compliance with the License.
