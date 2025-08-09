import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import queryPlugin from '@tanstack/eslint-plugin-query';
import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

const tsTypedConfigs = tseslint.configs.recommendedTypeChecked.map((cfg) => ({
    ...cfg,
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
        ...(cfg.languageOptions || {}),
        parserOptions: {
            ...(cfg.languageOptions?.parserOptions || {}),
            project: ['./tsconfig.json'],
            tsconfigRootDir: __dirname,
            ecmaFeatures: { jsx: true },
        },
    },
}));

const config = [
    {
        ignores: [
            '!.storybook_old',
            '/node_modules',
            '/.pnp',
            '.pnp.js',
            '/coverage',
            '/.next/',
            '/out/',
            '/build',
            '.DS_Store',
            '*.pem',
            'npm-debug.log*',
            'yarn-debug.log*',
            'yarn-error.log*',
            '.pnpm-debug.log*',
            '.env*.local',
            '.vercel',
            '*.tsbuildinfo',
            'next-env.d.ts',
            '.next',
            '.vscode',
            'yarn-error.log',
            '.eslintcache',
            'storybook-static',
            '.pnp.*',
            '.yarn/*',
            'package-lock.json',
            'node_modules_bak',
            '/src/assets',
            '.sentryclirc',
            '.history',
            '.idea',
            '*.d.ts',
            '/src/libs/Swagger',
            'public',
        ],
    },
    js.configs.recommended,
    ...compat.extends('next/core-web-vitals'),
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
            globals: {
                ...globals.browser,
                ...globals.es2021,
                jest: true,
            },
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
            import: importPlugin,
            prettier: prettierPlugin,
            'unused-imports': unusedImportsPlugin,
            '@tanstack/query': queryPlugin,
            '@next/next': nextPlugin,
        },
        settings: {
            react: { version: 'detect' },
            'import/resolver': {
                typescript: { alwaysTryTypes: true },
            },
        },
        rules: {
            'no-alert': 'off',
            camelcase: 'off',
            'no-console': 'off',
            'no-unused-vars': 'off',
            'no-param-reassign': 'off',
            'no-underscore-dangle': 'off',
            'no-restricted-exports': 'off',
            'react/no-children-prop': 'off',
            'react/react-in-jsx-scope': 'off',
            'jsx-a11y/anchor-is-valid': 'off',
            'react/no-array-index-key': 'off',
            'no-promise-executor-return': 'off',
            'react/require-default-props': 'off',
            'react/jsx-props-no-spreading': 'off',
            'import/prefer-default-export': 'off',
            'react/function-component-definition': 'off',
            'jsx-a11y/control-has-associated-label': 'off',
            'react-hooks/exhaustive-deps': 'off',
            'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
            'prefer-destructuring': ['warn', { object: true, array: false }],
            'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
            'react/jsx-no-duplicate-props': ['warn', { ignoreCase: false }],
            'unused-imports/no-unused-imports': 'off',
            'unused-imports/no-unused-vars': ['off', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],
        },
    },
    // TypeScript-specific typed linting
    ...tsTypedConfigs,
    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            '@typescript-eslint/naming-convention': 'off',
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/prefer-promise-reject-errors': 'off',
            'prefer-promise-reject-errors': 'off',
        },
    },
];

export default config;
