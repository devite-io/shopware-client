export default {
  root: true,
  rules: {
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    "arrow-parens": "on",
    "no-console": "on",
    indent: ["error", 2],
    "comma-dangle": ["error", "never"],
    "max-len": ["warn", 100, { ignoreRegExpLiterals: true }],
    "linebreak-style": ["error", "unix"],
    "import/no-cycle": "off"
  }
};
