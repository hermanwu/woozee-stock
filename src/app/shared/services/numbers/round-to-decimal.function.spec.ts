import { roundToDecimal } from './round-to-decimal.function';

describe('round to decimal', (): void => {
  it('should throw when the decimal places parameter is not an integer', (): void => {
    // Arrange
    const value = 1.155;
    const decimalPlaces = 1.5;

    // Act
    try {
      roundToDecimal(value, decimalPlaces);
    } catch (error) {
      expect(error.message).toBe(
        "Parameter 'decimalPlaces' must be an integer",
      );
    }
  });

  it(
    'should round 1.155 to one decimal correctly place for both toFixed and ' +
      'roundToDecimal',
    () => {
      // Arrange
      const value = 1.155;
      const decimalPlaces = 1;

      // Act
      const toFixedResult = value.toFixed(decimalPlaces);
      const result = roundToDecimal(value, decimalPlaces);

      // Assert
      expect(toFixedResult).toBe('1.2');
      expect(result).toBe(1.2);
    },
  );

  it(
    'should correctly round 1.15 to one decimal place for roundToDecimal but ' +
      'incorrectly for toFixed',
    () => {
      // Arrange
      const value = 1.15;
      const decimalPlaces = 1;

      // Act
      const toFixedResult = value.toFixed(decimalPlaces);
      const result = roundToDecimal(value, decimalPlaces);

      // Assert
      expect(toFixedResult).toBe('1.1');
      expect(result).toBe(1.2);
    },
  );

  it('should round 1.005 to two decimal places', (): void => {
    // Arrange
    const value = 1.005;

    // Act
    const toFixedResult = value.toFixed(2);
    const result = roundToDecimal(value, 2);

    // Assert
    expect(toFixedResult).toBe('1.00');
    expect(result).toBe(1.01);
  });

  it('should round 1.345 to two decimal places', (): void => {
    // Arrange
    const value = 1.345;

    // Act
    const toFixedResult = value.toFixed(2);
    const result = roundToDecimal(value, 2);

    // Assert
    expect(toFixedResult).toBe('1.34');
    expect(result).toBe(1.35);
  });

  it(
    'should return the same number if decimal places of the value ' +
      'is smaller or equal to the decimalPlaces parameter',
    (): void => {
      // Arrange
      const value1 = 20;
      const value2 = 0;
      const value3 = 1.5;

      // Act
      const result1 = roundToDecimal(value1, 2);
      const result2 = roundToDecimal(value2, 2);
      const result3 = roundToDecimal(value3, 2);

      // Assert
      expect(result1).toBe(20);
      expect(result2).toBe(0);
      expect(result3).toBe(1.5);
    },
  );
});
