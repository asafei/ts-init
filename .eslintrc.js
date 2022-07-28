/** @format */

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['prettier'],
    env: {
        browser: true,
        node: true,
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': 'error',
    },
}
