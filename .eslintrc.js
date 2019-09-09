module.exports = {
    root: true,
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    plugins: ['react-hooks'],
    parserOptions: {
        project: './tsconfig.json',
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': [
            'warn',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
            },
        ],
        'import/order': [
            'error',
            { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'] },
        ],
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        'react/prop-types': 0,
    },
    env: {
        browser: true,
    },
    overrides: [
        {
            files: ['*.test.ts', '*.test.tsx', 'tests/setup.ts'],
            rules: {
                'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
            },
            env: {
                jest: true,
            },
        }
    ]
};
