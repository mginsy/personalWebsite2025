module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Prettier plugin + recommended config
  ],
  plugins: ['react', '@typescript-eslint', 'import'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  rules: {
    // Customize rules here
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // 💡 Import sort order rule
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: {}, // Allow resolution of tsconfig paths
    },
  },
};
