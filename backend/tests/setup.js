// Set test environment variables
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret';
process.env.DATABASE_URL = 'postgresql://localhost:5432/voice_measure_test';

// Global test setup
global.console = {
  ...console,
  // Uncomment to disable console.log during tests
  // log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
};

// Add any global test utilities or mocks here
global.testUtils = {
  createTestUser: () => ({
    id: 'test-user-id',
    username: 'testuser',
    email: 'test@example.com'
  }),
  createTestMeasurement: () => ({
    id: 'test-measurement-id',
    value: 32.10,
    unit: 'feet',
    userId: 'test-user-id',
    timestamp: new Date().toISOString()
  })
};
