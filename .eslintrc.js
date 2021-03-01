module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  plugins: ['react', 'react-native', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['error'],
      },
    ],
    'no-debugger': 1,
    'no-var': 1,
    semi: [1, 'always'],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'max-lines': [
      'error',
      { max: 350, skipBlankLines: true, skipComments: true },
    ],
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'object-curly-spacing': ['warn', 'always'],
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'no-underscore-dangle': 0,
    'no-useless-catch': 0,
    'no-alert': 0,
    'no-lone-blocks': 0,
    'jsx-quotes': 1,
    'no-unused-vars': 2,
    'import/no-unresolved': 2,
    'no-undef': 2,
    'react/display-name': [
      1,
      {
        ignoreTranspilerName: false,
      },
    ],
    'react/forbid-prop-types': [
      1,
      {
        forbid: ['any'],
      },
    ],
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-curly-spacing': 1,
    'react/jsx-indent-props': 0,
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 1,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': [
      // enable this after refactor
      0,
      {
        ignoreCase: true,
        shortHandFirst: true,
        callbacksLast: true,
        noSortAlphabetically: true,
      },
    ],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-wrap-multilines': 1,
    'react/no-danger': 0,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'react/no-direct-mutation-state': 1,
    'react/no-multi-comp': [1, { ignoreStateless: true }],
    'react/no-set-state': 0,
    'react/no-unknown-property': 1,
    'react/prefer-es6-class': 1,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 1,
    'import/extensions': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1,
  },
  globals: {
    Generator: true,
  },
  settings: {
    'import/ignore': ['react-native'],
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '~': './src',
          '@elements': './src/components/elements',
          '@forms': './src/components/forms',
          '@fragments': './src/components/fragments',
          '@layouts': './src/components/layouts',
        },
      },
    },
  },
};
