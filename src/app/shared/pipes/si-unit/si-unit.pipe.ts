import { Pipe, PipeTransform } from '@angular/core';
import { roundToDecimal } from '../../numbers';
import { invalidPipeArgumentError } from '../invalid-pipe-argument-error';
import { SiUnitSystem } from './si-unit-system';
import { SiUnit } from './si-unit.enum';

/**
 * Display number with more human readable format
 * by replacing following zeros with a letter
 * (1K for 1000, 1B for 1000000000) in International System of Units representation
 * (also known as French Système international (d'unités) with (SI abbreviation)).
 * It supports K for thousands, M for millions, B for billions and T for trillions.
 *
 * @example
 *
 * <div>
 *   {{
 *      computeNode.iops
 *        | siUnit
 *          : 2
 *          : false
 *          : SiUnit.thousand
 *          : SiUnit.million
 *    }}
 * </div>
 */
@Pipe({
  name: 'siUnit',
})
export class SiUnitPipe implements PipeTransform {
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
   * Transform the input value into a SI writing style.
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
    value: string | number | null | undefined,
    decimalPlaces: number = 0,
    hideUnit = false,
    currentUnit: SiUnit = SiUnit.base,
    targetUnit?: SiUnit
  ): string | number {
    // No transformation if input is undefined or null.
    if (value === undefined || value === null) {
      return value;
    }

    const parsedValue = SiUnitPipe.parseValue(value);

    // Check for bad input value
    if (!SiUnitPipe.isValueParameterValid(parsedValue)) {
      throw invalidPipeArgumentError(
        SiUnitPipe,
        `Invalid input value: ${value}`
      );
    }

    // Check for bad input decimalPlaces
    if (!SiUnitPipe.isDecimalPlacesParameterValid(decimalPlaces)) {
      throw invalidPipeArgumentError(
        SiUnitPipe,
        `Invalid input decimalPlaces: ${decimalPlaces}`
      );
    }

    let outputValue: number;
    let outputUnit: string;

    // Convert parsedValue in base unit.
    const parsedValueInBaseUnit =
      parsedValue * SiUnitSystem[currentUnit].valueInBaseUnit;

    // If targetUnit exists, convert output to targetUnit.
    if (targetUnit) {
      const {
        displayUnit: targetDisplayUnit,
        valueInBaseUnit: targetDisplayUnitValueInBaseUnit,
      } = SiUnitSystem[targetUnit];

      outputUnit = targetDisplayUnit;
      // Convert value in base unit to value in display unit.
      outputValue = parsedValueInBaseUnit / targetDisplayUnitValueInBaseUnit;
    }

    // If targetUnit does not exist, convert unit dynamically.
    else {
      const siUnitInDescendingOrder = Object.values(SiUnitSystem).reverse();

      // Loop through all the available unit from large to small.
      for (const {
        displayUnit: potentialDisplayUnit,
        valueInBaseUnit: potentialDisplayUnitValueInBaseUnit,
      } of siUnitInDescendingOrder) {
        // Calculate value with new unit.
        const potentialValue =
          parsedValueInBaseUnit / potentialDisplayUnitValueInBaseUnit;
        outputUnit = potentialDisplayUnit;
        outputValue = potentialValue;

        // When converted value >= 1 for positive number,
        //  or converted value <= -1 for negative number,
        //  stop the search.
        if (potentialValue >= 1 || potentialValue <= -1) {
          break;
        }
      }
    }

    // Round output based on decimalPlaces input.
    const roundedOutputValue = roundToDecimal(outputValue, decimalPlaces);

    return hideUnit ? roundedOutputValue : roundedOutputValue + outputUnit;
  }
}
