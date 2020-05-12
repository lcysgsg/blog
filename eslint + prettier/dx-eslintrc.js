module.exports = {
    root: true,
    env: {
      node: true,
    },
    plugins: ['prettier'],
    extends: [
      'eslint:recommended',
      'plugin:vue/recommended',
      'plugin:prettier/recommended',
      'prettier/vue',
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
          semi: false,
          singleQuote: true,
          htmlWhitespaceSensitivity: 'ignore',
        },
      ],
      'vue/require-default-prop': false,
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
  }
  