module.exports = {
  extends: [
    "fyfirman",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["@tanstack/query", "tailwindcss"],
  rules: {
    "tailwindcss/classnames-order": "off",
    // your overrides
  },
};
