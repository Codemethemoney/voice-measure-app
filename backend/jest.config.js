module.exports = {
  // Test environment
  testEnvironment: 'node',
  verbose: true,

  // Coverage reporting
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },

  // Test paths
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // Module file extensions
  moduleFileExtensions: ['js', 'json'],

  // Setup files
  setupFiles: ['<rootDir>/tests/setup.js'],

  // Mock settings
  clearMocks: true,
  restoreMocks: true,

  // Timeout settings
  testTimeout: 10000
};