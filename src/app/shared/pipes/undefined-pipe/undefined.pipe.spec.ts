import { UndefinedPipe } from './undefined.pipe';

describe('UndefinedPipe', (): void => {
  let pipe: UndefinedPipe;

  beforeEach((): void => {
    pipe = new UndefinedPipe();
  });

  it('Should convert undefined to em-dash', (): void => {
    // Act
    const result = pipe.transform(undefined);

    // Assert
    expect(result).toEqual('\u2014');
  });

  it('Should convert null to em-dash', (): void => {
    // Act
    const result = pipe.transform(null);

    // Assert
    expect(result).toEqual('\u2014');
  });

  it('Should return a numeric value as-is', (): void => {
    // Act
    const result = pipe.transform(0);

    // Assert
    expect(result).toBe(0);
  });

  it('should return a string value as-is', (): void => {
    // Act
    const result = pipe.transform('');

    // Assert
    expect(result).toBe('');
  });

  it('Should return an object as-is', (): void => {
    // Act
    const result = pipe.transform({ name: 'Compose.Cloud' });

    // Assert
    expect(result).toEqual({ name: 'Compose.Cloud' });
  });
});
