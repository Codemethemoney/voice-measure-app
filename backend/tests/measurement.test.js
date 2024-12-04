describe('Measurement Service', () => {
  const { createTestUser, createTestMeasurement } = global.testUtils;

  beforeEach(() => {
    // Clear any mocks or test data before each test
    jest.clearAllMocks();
  });

  describe('createMeasurement', () => {
    it('should create a new measurement with valid input', async () => {
      const testUser = createTestUser();
      const testMeasurement = createTestMeasurement();

      // Example test implementation
      expect(testMeasurement.value).toBe(32.10);
      expect(testMeasurement.unit).toBe('feet');
      expect(testMeasurement.userId).toBe(testUser.id);
    });

    it('should validate measurement input', async () => {
      const invalidMeasurement = {
        value: 'invalid',
        unit: 'invalid'
      };

      // Example validation test
      expect(() => {
        // Add validation logic here
      }).toThrow('Invalid measurement value');
    });
  });

  describe('syncMeasurements', () => {
    it('should sync offline measurements when online', async () => {
      const testMeasurement = createTestMeasurement();
      
      // Example sync test
      const syncResult = {
        success: true,
        synced: [testMeasurement]
      };

      expect(syncResult.success).toBe(true);
      expect(syncResult.synced).toHaveLength(1);
    });
  });
});
