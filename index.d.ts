import { Linter } from 'eslint';
declare const _default: ({
    readonly rules: Readonly<Linter.RulesRecord>;
} | {
    ignores: string[];
    plugins: {
        'prefer-arrow': {};
        tsdoc: {};
        onlyWarn: {};
    };
    languageOptions: {
        parserOptions: {
            project: string;
        };
    };
    rules: {
        '@typescript-eslint/consistent-type-imports': "warn";
        quotes: "off";
        '@typescript-eslint/quotes': ["warn", string];
        'tsdoc/syntax': "warn";
        'prefer-arrow/prefer-arrow-functions': "warn";
        'no-case-declarations': "off";
        '@typescript-eslint/no-unused-vars': ["warn", {
            varsIgnorePattern: string;
            argsIgnorePattern: string;
        }];
        '@typescript-eslint/no-unnecessary-type-constraint': "off";
        '@typescript-eslint/no-namespace': "off";
        '@typescript-eslint/no-non-null-assertion': "off";
        '@typescript-eslint/no-unsafe-argument': "off";
        '@typescript-eslint/no-unsafe-return': "off";
        '@typescript-eslint/no-explicit-any': "off";
    };
})[];
export default _default;
