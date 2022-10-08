module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'standard',
    'prettier'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'react-hooks',
    'eslint-plugin-import-helpers'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    extraFileExtensions: ['.json']
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  globals: {
    __DEV__: false,
    jasmine: false,
    beforeAll: false,
    afterAll: false,
    beforeEach: false,
    afterEach: false,
    test: false,
    expect: false,
    describe: false,
    jest: false,
    it: false
  },
  ignorePatterns: [
    '/lib/locales/**',
    '/src/generated',
    'metro.config.js',
    '**/*.md',
    '/node_modules/**/*.*',
    'jest.config.js',
    'jest.setup.js',
    'babel.config.js',
    '.eslintrc.js',
    '__tests__/*.js',
    '/coverage/*.*',
    'jsconfig.json',
    'tsconfig.json',
    'package.json',
    'package-lock.json',
    'app.json',
    '/assets/loader.json',
    '/assets/loader-primary.json',
    '/web-build/*.js',
    '/e2e/config.json',
    '/ios/**/*.*',
    '/envs/*.*',
    'sonar-project.properties',
    '/android/**/*.*',
    '/mocks/*.*',
    '__placeholder__.js',
    'firebase.json'
  ],
  env: {
    'react-native/react-native': true
  },
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-var-requires': 0,
    'comma-dangle': 0,
    'multiline-ternary': 0,
    'no-undef': 0,
    'no-use-before-define': 'off',
    quotes: 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 'off',
    'space-before-function-paren': 0,
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', next: '*', prev: 'const' },
      { blankLine: 'always', next: '*', prev: 'let' },
      { blankLine: 'always', next: '*', prev: 'var' },
      { blankLine: 'never', next: 'const', prev: 'const' },
      { blankLine: 'never', next: 'const', prev: 'var' },
      { blankLine: 'never', next: 'var', prev: 'const' },
      { blankLine: 'never', next: 'var', prev: 'var' },
      { blankLine: 'never', next: 'let', prev: 'let' },
      { blankLine: 'never', next: 'var', prev: 'let' },
      { blankLine: 'never', next: 'const', prev: 'let' },
      { blankLine: 'never', next: 'let', prev: 'var' },
      { blankLine: 'never', next: 'let', prev: 'const' },
      { blankLine: 'always', next: 'return', prev: '*' },
      { blankLine: 'always', next: 'block-like', prev: '*' },
      { blankLine: 'always', next: '*', prev: 'block-like' },
      { blankLine: 'always', next: 'export', prev: '*' },
      { blankLine: 'always', next: '*', prev: 'export' }
    ],
    'max-lines': [
      'warn',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'react/jsx-curly-brace-presence': [1, 'never'],
    'max-params': [
      'warn',
      {
        max: 4
      }
    ],
    'max-depth': ['warn', 4],
    'no-var': ['warn'],
    'vars-on-top': ['error'],
    'block-scoped-var': ['error'],
    'no-use-before-define': ['warn'],
    'import/named': ['off'],
    'react/function-component-definition': [
      1,
      { namedComponents: 'arrow-function' }
    ],
    'react/display-name': 1,
    'react-hooks/rules-of-hooks': 1,
    'react/prop-types': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unstable-nested-components': ['warn'],
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    'react/prefer-stateless-function': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/accessible-emoji': 0,
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react/require-default-props': 0,
    'react/jsx-no-leaked-render': [
      'warn',
      { validStrategies: ['coerce', 'ternary'] }
    ],
    radix: 0,
    'arrow-body-style': ['error', 'as-needed'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports'
      }
    ],
    'no-shadow': ['off'],
    'jsx-a11y/href-no-hash': 'off',
    'react-hooks/exhaustive-deps': 1,
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/', 'module', 'absolute'],
          [
            '/^@hooks/',
            '/^@context/',
            '/^@lib/',
            '/^@components/',
            '/^@service/',
            '/^@utils/',
            '/^@constants/',
            '/^@screens/',
            '/^@styles/'
          ],
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ],
    'no-console': 1,
    'no-restricted-exports': 1,
    'import/no-default-export': 1,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 1,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'comma-dangle': [1, 'never'],
    'arrow-parens': [1, 'as-needed'],
    'no-nested-ternary': ['warn'],
    'react-native/sort-styles': ['warn'],
    'no-param-reassign': ['warn'],
    'prefer-template': ['warn'],
    'prefer-arrow-callback': ['warn'],
    'react/jsx-boolean-value': 1,
    'react/no-multi-comp': 1
  }
};
