module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
  ],
  rules: {
    "no-empty": 0,
    "arrow-body-style": 0,
    "react/self-closing-comp": 0,
    "react/jsx-curly-brace-presence": 0,
    "no-unused-vars": 0,
    "semi": 0,
    "quotes": 0,
    "no-trailing-spaces": 0,
    "import/no-extraneous-dependencies": 0,
    'import/extensions': 0,
    "import/newline-after-import": 0,
    'import/order': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    "padded-blocks": 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'max-len': [
      2,
      250,
    ],
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_d',
          '_dh',
          '_h',
          '_id',
          '_m',
          '_n',
          '_t',
          '_text',
        ],
      },
    ],
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [
          'Link',
        ],
        specialLink: [
          'to',
          'hrefLeft',
          'hrefRight',
        ],
        aspects: [
          'noHref',
          'invalidHref',
          'preferButton',
        ],
      },
    ],
  },
};
