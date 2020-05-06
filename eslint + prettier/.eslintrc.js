module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['prettier'],
  extends: ["plugin:vue/recommended"],
  extends: ['plugin:vue/essential', '@vue/standard', 'plugin:prettier/recommended'],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": ["error"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};