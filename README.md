# remix-monorepo

## Why

Remix and monorepos are not best friends, but it's getting more and more support. This package is a set of utilities to make the configuration in monorepos very simple.

## Getting Started

```bash
yarn add remix-monorepo
```

### getConfig

The purpose is to bundle the dependencies within the monorepo but also to watch & recompile when changes happen.
```js
const { getConfig } = require('remix-monorepo')

const monorepoConfig = getConfig()

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverDependenciesToBundle: monorepoConfig.serverDependenciesToBundle,
  watchPaths: monorepoConfig.watchPaths,
}
```
