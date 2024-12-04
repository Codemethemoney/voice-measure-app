module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'jest',
    'react-hooks'
  ],
  rules: {
    // React specific rules
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off', // Using TypeScript instead
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function'
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    
    // TypeScript specific rules
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    
    // Import rules
    'import/extensions': ['error', 'never', { css: 'always', json: 'always' }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/*.test.tsx',
        '**/*.spec.tsx',
        '**/*.stories.tsx',
        'tests/**/*'
      ]
    }],
    
    // Best practices
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'off', // Use TypeScript's checker instead
    'max-len': ['error', { code: 100, ignoreComments: true }],
    'camelcase': ['error', { properties: 'never', ignoreDestructuring: true }],
    
    // Testing
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json'
      }
    },
    'react': {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['*.test.tsx', '*.spec.tsx', '**/*.stories.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'max-len': 'off',
        'react/jsx-props-no-spreading': 'off'
      }
    }
  ]
};