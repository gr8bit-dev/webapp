module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: false,
    },
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [],
    rules: {
        // note you must disable the base rule as it can report incorrect errors
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
    },
};
