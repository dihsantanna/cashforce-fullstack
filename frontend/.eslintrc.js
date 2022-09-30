module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/extensions': [
      'error',
      {
        ignorePackages: true,
        pattern: {
          interface: 'always',
          vue: 'always',
          js: 'never',
          ts: 'never',
        },
      },
    ],
  },
};
