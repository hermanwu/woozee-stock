import { Pipe, PipeTransform } from '@angular/core';
import { roundToDecimal } from '../../numbers';
import { invalidPipeArgumentError } from '../invalid-pipe-argument-error';
import { IopsUnitSystem } from './iops-unit-system';
import { IopsUnit } from './iops-unit.enum';

/**
 * Iops pipe that is used for converting IOPS (IO per second) unit.
 *
 * @example
 *
 * <div>
 *   {{
 *      computeNode.iops
 *        | iops
 *          : 2
 *          : false
 *          : IopsUnit.thousand
 *          : IopsUnit.million
 *    }}
 * </div>
 */
@Pipe({
  name: 'unit',
})
export class IopsPipe implements PipeTransform {
  /**
   * Parse the value into a number
   *
   * @param value Value to parse
   *
   * @returns Parsed value
   */
  private static parseValue(value: string | number): number {
    if (typeof value === 'number') {
      return value;
    } else {
      return Number.parseFloat(value);
    }
  }

  /**
   * Validate the 'decimalPlaces' parameter
   *
   * @param decimalPlaces Value to validate
   *
   * @returns Whether the parameter is a valid
   */
  private static isDecimalPlacesParameterValid(decimalPlaces: number): boolean {
    if (
      Number.isNaN(decimalPlaces) ||
      !Number.isFinite(decimalPlaces) ||
      !Number.isInteger(decimalPlaces) ||
      decimalPlaces < 0
    ) {
      return false;
    }

    return true;
  }

  /**
   * Validate the 'value' parameter
   *
   * @param value Value to validate
   *
   * @returns Whether the parameter is valid
   */
  private static isValueParameterValid(value: number): boolean {
    if (Number.isNaN(value) || !Number.isFinite(value)) {
      return false;
    }
    return true;
  }

  /**
   * Transform the input value into a iops unit measurement
   *
   * @param value Value to transform
   * @param decimalPlaces Number of decimal places to include in the result
   * @param hideUnit Whether to display the unit of measurement in the result
   * @param currentUnit Measurement unit of the current value
   * @param targetUnit Measurement unit in which to return the result
   *
   * @returns Transformed value
   */
  transform(
    value: string | number,
    decimalPlaces: number = 0,
    hideUnit = false,
    currentUnit: IopsUnit = IopsUnit.base,
    targetUnit?: IopsUnit
  ): string | number {
    // No transformation if input is undefined or null.
    if (value === undefined || value === null) {
      return value;
    }

    const parsedValue = IopsPipe.parseValue(value);

    // Check for bad input value
    if (!IopsPipe.isValueParameterValid(parsedValue)) {
      throw invalidPipeArgumentError(IopsPipe, `Invalid input value: ${value}`);
    }

    // Check for bad input decimalPlaces
    if (!IopsPipe.isDecimalPlacesParameterValid(decimalPlaces)) {
      throw invalidPipeArgumentError(
        IopsPipe,
        `Invalid input decimalPlaces: ${decimalPlaces}`
      );
    }

    let outputValue: number;
    let outputUnit: string;

    // Convert parsedValue in base unit.
    const parsedValueInBaseUnit =
      parsedValue * IopsUnitSystem[currentUnit].valueInBaseUnit;

    // If targetUnit exists, convert output to targetUnit.
    if (targetUnit) {
      const {
        displayUnit: targetDisplayUnit,
        valueInBaseUnit: targetDisplayUnitValueInBaseUnit,
      } = IopsUnitSystem[targetUnit];

      outputUnit = targetDisplayUnit;
      // Convert value in base unit to value in display unit.
      outputValue = parsedValueInBaseUnit / targetDisplayUnitValueInBaseUnit;
    }
    // If targetUnit does not exist, convert unit dynamically.
    else {
      const iopsUnitInDescendingOrder = Object.values(IopsUnitSystem).reverse();

      // Loop through all the available unit from large to small.
      for (const {
        displayUnit: potentialDisplayUnit,
        valueInBaseUnit: potentialDisplayUnitValueInBaseUnit,
      } of iopsUnitInDescendingOrder) {
        // Calculate value with new unit.
        const potentialValue =
          parsedValueInBaseUnit / potentialDisplayUnitValueInBaseUnit;
        outputUnit = potentialDisplayUnit;
        outputValue = potentialValue;
        console.log(outputValue);

        // When converted value is bigger than or equal 1, stop the searching.
        if (potentialValue >= 1 || potentialValue < -1) {
          break;
        }
      }
    }

    // Round output based on decimalPlaces input.
    const roundedOutputValue = roundToDecimal(outputValue, decimalPlaces);
    return hideUnit ? roundedOutputValue : roundedOutputValue + outputUnit;
  }
}
