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
            eslint-plugin-tsdoc
```

# Usage

```ts
import configPrisma from 'eslint-config-prisma'
import tsEslint from 'typescript-eslint'

export default tsEslint.config({
  ignores: ['**/build/**/*', 'eslint.config.js'],
  extends: [...configPrisma],
  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
    },
  }
})
```
