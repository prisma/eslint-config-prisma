# eslint-config-prisma

[![trunk](https://github.com/prisma/eslint-config-prisma/actions/workflows/trunk.yaml/badge.svg)](https://github.com/prisma/eslint-config-prisma/actions/workflows/trunk.yaml)

# Installation

```sh
npm add -D  eslint-config-prisma \
            eslint \
            @typescript-eslint/eslint-plugin \
            @typescript-eslint/parser \
            eslint-plugin-deprecation \
            eslint-plugin-only-warn \
            eslint-plugin-prefer-arrow \
            eslint-plugin-simple-import-sort \
            eslint-plugin-tsdoc
```

Configure your ESLint config to extend from `prisma`:

```json
{
  "extends": ["prisma"]
}
```
