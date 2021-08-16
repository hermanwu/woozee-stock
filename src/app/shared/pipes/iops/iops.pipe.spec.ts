import { IopsUnit } from './iops-unit.enum';
import { IopsPipe } from './iops.pipe';

describe('IOPS Pipe', () => {
  let pipe: IopsPipe;

  beforeEach(() => {
    pipe = new IopsPipe();
  });

  describe('value input', (): void => {
    it('should throw invalid input value error', (): void => {
      expect(() => {
        pipe.transform('a');
      }).toThrow(
        new Error(
          "InvalidPipeArgument: 'Invalid input value: a' for pipe 'IopsPipe'",
        ),
      );
    });

    it('should display zero when input is zero.', () => {
      const resultWithUndefinedUnit = pipe.transform(0);

      expect(resultWithUndefinedUnit).toBe('0');
    });
  });

  describe('decimalPlaces input', (): void => {
    it('should throw invalid input decimalPlaces error', (): void => {
      expect(() => {
        pipe.transform(2048, 1.1);
      }).toThrow(
        new Error(
          "InvalidPipeArgument: 'Invalid input decimalPlaces: 1.1' for pipe 'IopsPipe'",
        ),
      );
    });

    it('should default to zero when it is undefined.', () => {
      const decimalPlaces = undefined;
      const result = pipe.transform(3123, decimalPlaces);

      expect(result).toBe('3K');
    });

    it('should convert value to specified decimal places;', () => {
      const decimalPlaces = 2;
      const result = pipe.transform(3123, decimalPlaces);

      expect(result).toBe('3.12K');
    });
  });

  describe('hideUnit input', () => {
    it('should not hide unit when it is false;', () => {
      const hideUnit = false;
      const result = pipe.transform(3000, undefined, hideUnit);

      expect(result).toBe('3K');
    });

    it('should hide unit when it is true;', () => {
      const hideUnit = true;
      const result = pipe.transform(3000, undefined, hideUnit);

      expect(result).toBe(3);
    });

    it('should not hide unit when it is not defined;', () => {
      const result = pipe.transform(3000);

      expect(result).toBe('3K');
    });
  });

  describe('currentUnit input', () => {
    it('should default to base unit when it is undefined;', () => {
      const currentUnit = IopsUnit.base;
      const resultWithBaseUnit = pipe.transform(
        3000,
        undefined,
        false,
        currentUnit,
        IopsUnit.thousand,
      );

      const resultWithUndefinedUnit = pipe.transform(
        3000,
        undefined,
        false,
        undefined,
        IopsUnit.thousand,
      );

      expect(resultWithUndefinedUnit).toBe('3K');
      expect(resultWithUndefinedUnit).toBe(resultWithBaseUnit);
    });
  });

  describe('targetUnit input', () => {
    it(
      'should convert current display unit dynamically' +
        ' when target unit is not specified;',
      () => {
        const targetUnit = undefined;
        let result = pipe.transform(
          3000,
          undefined,
          false,
          IopsUnit.base,
          targetUnit,
        );
        expect(result).toBe('3K');

        result = pipe.transform(
          3000,
          undefined,
          false,
          IopsUnit.thousand,
          targetUnit,
        );
        expect(result).toBe('3M');

        result = pipe.transform(
          3000,
          undefined,
          false,
          IopsUnit.million,
          targetUnit,
        );
        expect(result).toBe('3B');

        result = pipe.transform(
          3000,
          undefined,
          false,
          IopsUnit.billion,
          targetUnit,
        );
        expect(result).toBe('3T');
      },
    );

    it('should convert current unit to target unit', (): void => {
      let result = pipe.transform(
        3, // 3
        undefined,
        false,
        IopsUnit.base,
        IopsUnit.base,
      );
      expect(result).toBe('3');

      result = pipe.transform(
        3000, // 3 thousand
        undefined,
        false,
        IopsUnit.base,
        IopsUnit.thousand,
      );
      expect(result).toBe('3K');

      result = pipe.transform(
        3000000, // 3 million
        undefined,
        false,
        IopsUnit.base,
        IopsUnit.million,
      );
      expect(result).toBe('3M');

      result = pipe.transform(
        3000000000, // 3 billion.
        undefined,
        false,
        IopsUnit.base,
        IopsUnit.billion,
      );
      expect(result).toBe('3B');

      result = pipe.transform(
        3000000000000, // 3 trillion.
        undefined,
        false,
        IopsUnit.base,
        IopsUnit.trillion,
      );
      expect(result).toBe('3T');
    });

    it('should convert large current unit to smaller target unit', (): void => {
      let result = pipe.transform(
        3, // 3
        undefined,
        false,
        IopsUnit.trillion,
        IopsUnit.billion,
      );
      expect(result).toBe('3000B');

      result = pipe.transform(
        3,
        undefined,
        false,
        IopsUnit.billion,
        IopsUnit.million,
      );
      expect(result).toBe('3000M');

      result = pipe.transform(
        3,
        undefined,
        false,
        IopsUnit.million,
        IopsUnit.thousand,
      );
      expect(result).toBe('3000K');

      result = pipe.transform(
        3,
        undefined,
        false,
        IopsUnit.thousand,
        IopsUnit.base,
      );
      expect(result).toBe('3000');
    });
  });

  it('should remove trailing zero of an integer.', () => {
    const resultWithUndefinedUnit = pipe.transform(
      0,
      2,
      false,
      IopsUnit.million,
      IopsUnit.billion,
    );

    expect(resultWithUndefinedUnit).toBe('0B');
  });

  it('should remove trailing zero of rounded number .', () => {
    const resultWithUndefinedUnit = pipe.transform(
      1004,
      2,
      false,
      IopsUnit.million,
      IopsUnit.billion,
    );

    expect(resultWithUndefinedUnit).toBe('1B');
  });

  it('should return the original value if the input value is null or undefined', (): void => {
    expect(pipe.transform(undefined)).toBe(undefined);
    expect(pipe.transform(null)).toBe(null);
  });
});
