import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import pluginPreferArrow from 'eslint-plugin-prefer-arrow'
import pluginOnlyWarn from 'eslint-plugin-only-warn'
import pluginTsdoc from 'eslint-plugin-tsdoc'
import pluginDeprecation from 'eslint-plugin-deprecation'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tsEslint.config(
  eslint.configs.recommended,
  // https://github.com/prettier/eslint-config-prettier
  eslintConfigPrettier,
  // This enables the use of a lint rule to reject function declarations. This is
  // preferable as a way to encourage higher order function usage. For example it is not
  // possible to wrap a function declaration with Open Telemetry instrumentation but it is
  // possible to wrap an arrow function since its an expression.
  // https://github.com/TristonJ/eslint-plugin-prefer-arrow
  pluginPreferArrow,
  // This makes it so the IDE reports lint rejections as warnings only. This is
  // better than errors because most lint rejections are not runtime errors. This
  // allows IDE errors to be exclusive for e.g. static type errors which often are
  // reflective of real runtime errors.
  // https://github.com/bfanger/eslint-plugin-only-warn
  pluginOnlyWarn,
  // https://github.com/microsoft/tsdoc/tree/master/eslint-plugin
  pluginTsdoc,
  // This enables the use of a lint rule to reject use of @deprecated functions.
  // https://github.com/gund/eslint-plugin-deprecation
  pluginDeprecation,
  // https://github.com/typescript-eslint/typescript-eslint
  ...tsEslint.configs.strictTypeChecked,
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': 'warn',
      // Enforce backticks
      // Note you must disable the base rule as it can report incorrect errors.
      quotes: 'off',
      '@typescript-eslint/quotes': ['warn', 'backtick'],
      'tsdoc/syntax': 'warn',
      'simple-import-sort/exports': 'warn',
      'deprecation/deprecation': 'warn',
      'prefer-arrow/prefer-arrow-functions': 'warn',
      // TypeScript makes these safe & effective
      'no-case-declarations': 'off',
      // Same approach used by TypeScript noUnusedLocals
      '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
      // Needed when working with .mts/.cts where a lone e.g. <T> is not allowed
      '@typescript-eslint/no-unnecessary-type-constraint': 'off',
      // Useful for organizing Types
      '@typescript-eslint/no-namespace': 'off',
      // Turn training wheels off. When we want these we want these.
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
)
