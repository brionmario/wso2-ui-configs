# `@wso2/stylelint-config`

Shareable Stylelint configurations &amp; used in WSO2 code bases.

## Installation

You'll first need to install [Stylelint](https://stylelint.io/):

### With npm

```sh
npm i stylelint --save-dev
```

### With pnpm

```sh
pnpm add --save-dev stylelint
```

### With Yarn

```sh
yard add --dev stylelint
```

Next, install `@wso2/stylelint-config`:

### With npm

```sh
npm i @wso2/stylelint-config --save-dev
```

### With pnpm

```sh
pnpm add --save-dev @wso2/stylelint-config
```

### With Yarn

```sh
yard add --dev @wso2/stylelint-config
```

## Usage

You can extend the `@wso2/stylelint-config` in your preferred configuration file flavor.

```js
// stylelint.config.cjs

module.exports = {
  extends: ['@wso2/stylelint-config'],
  ignoreFiles: ['**/*.js', '**/*.cjs'],
};
```

For more extending strategies, read the [official guide](https://stylelint.io/user-guide/configure).
