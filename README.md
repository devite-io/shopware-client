# Shopware Client

[![npm version][npm-version-src]][npm-version-href]

Third party API client for Shopware 6 that supports StoreAPI and AdminAPI.

## Quick Setup

Install the client in your JavaScript project:

```bash
npx install @devite/shopware-client
```

That's it! You can now use the Shopware API in your project ✨


## Getting started

```javascript
import { ShopwareClient } from '@devite/shopware-client';

// TODO: Add examples
```

## Contribution

<details>
  <summary>Local development</summary>

  ```bash
  # Install dependencies
  bun install --frozen-lockfile
  
  # Generate module types and build the module
  bun run build
  
  # Run ESLint
  bun run lint
  
  # Run Vitest
  bun run test
  bun run test:watch
  
  # Release new version
  bun run release
  ```
</details>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@devite/shopware-client/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@devite/shopware-client
