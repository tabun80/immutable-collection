module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: { '{}': false },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'after-used' }],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'eol-last': ['error', 'always'],
    'generator-star-spacing': ['error', { before: true, after: false }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums",
      },
    ],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'import/extensions': [
      'error',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/no-default-export': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'import/prefer-default-export': 'off',
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: [
          '.js',
          '.ts',
          '.json',
          '.d.ts',
        ],
      },
    },
  },
};
