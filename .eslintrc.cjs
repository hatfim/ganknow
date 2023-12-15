const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['import', 'import-helpers', 'vue', 'tailwindcss', 'prettier'],
  rules: {
    'comma-dangle': ERROR,
    indent: OFF,
    quotes: [ERROR, 'single', 'avoid-escape'],
    'linebreak-style': [ERROR, 'unix'],
    semi: [ERROR, 'never'],
    'space-before-function-paren': [
      ERROR,
      { anonymous: 'always', named: 'never', asyncArrow: 'ignore' },
    ],
    'keyword-spacing': [ERROR, { after: true }],
    'jsx-quotes': [ERROR, 'prefer-single'],
    'brace-style': [ERROR, '1tbs', { allowSingleLine: true }],
    'object-curly-spacing': [ERROR, 'always'],
    curly: ERROR,
    'no-fallthrough': OFF,
    'comma-spacing': ERROR,
    'comma-style': [ERROR, 'last'],
    'no-irregular-whitespace': [ERROR],
    eqeqeq: [ERROR, 'smart'],
    'no-spaced-func': ERROR,
    'array-bracket-spacing': [ERROR, 'never'],
    'key-spacing': [ERROR, { beforeColon: false, afterColon: true }],
    'no-console': OFF,
    'no-unused-vars': [
      ERROR,
      { args: 'none', vars: 'all', varsIgnorePattern: '[rR]eact' },
    ],
    'space-in-parens': [ERROR, 'never'],
    'space-unary-ops': [ERROR, { words: true, nonwords: false }],
    'spaced-comment': [
      ERROR,
      'always',
      { exceptions: ['*', '#__PURE__'], markers: ['/'] },
    ],
    'max-depth': [WARN, 4],
    radix: [ERROR, 'always'],
    'eol-last': ERROR,
    'arrow-spacing': ERROR,
    'space-before-blocks': [ERROR, 'always'],
    'space-infix-ops': ERROR,
    'no-new-wrappers': ERROR,
    'no-self-compare': ERROR,
    'no-nested-ternary': ERROR,
    'no-multiple-empty-lines': ERROR,
    'no-unneeded-ternary': ERROR,
    'no-duplicate-imports': ERROR,
    'no-unreachable': [ERROR],
    'no-unexpected-multiline': [ERROR],

    // Import
    'import/default': OFF,
    'import/named': OFF,
    'import/namespace': OFF,
    'import/no-unresolved': OFF,
    'import-helpers/order-imports': [
      WARN,
      {
        newlinesBetween: 'always', // new line between groups
        groups: ['module', '/^@/shared/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'import/extensions': OFF,
    'import/no-extraneous-dependencies': [0, { 'packageDir ': './src/' }],
    'max-len': [
      'error',
      {
        code: 160,
        ignorePattern: 'class="([\\s\\S]*?)"|d="([\\s\\S]*?)"', // ignore classes or svg draw attributes
        ignoreUrls: true,
      },
    ],
    'vue/multi-word-component-names': OFF,
    'prettier/prettier': ERROR,

    // Tailwind
    'tailwindcss/classnames-order': OFF, // conflicts with prettier-plugin-tailwindcss
    'tailwindcss/enforces-negative-arbitrary-values': ERROR,
    'tailwindcss/enforces-shorthand': ERROR,
    'tailwindcss/migration-from-tailwind-2': ERROR,
    'tailwindcss/no-custom-classname': ERROR,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        map: [['@', './src']],
      },
    },
  },
}
