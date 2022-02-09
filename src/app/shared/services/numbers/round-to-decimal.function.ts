/**
 * Round the value to the designated number of decimal places.
 *
 * ECMAScript uses a binary floating-point representation which can only
 * approximate many decimal fractions. This results in rounding errors for the
 * most common approaches to rounding in ECMAScript.
 *
 * This approach shifts the value by the target number of decimal places using
 * exponential notation to avoid rounding errors.
 *
 * @param value Value to round to the designated decimal places
 * @param decimalPlaces Decimal places to round the number to
 *
 * @returns Rounded value with the designated number of decimal places
 */
export function roundToDecimal(value: number, decimalPlaces: number): number {
  if (!Number.isInteger(decimalPlaces)) {
    throw TypeError(`Parameter 'decimalPlaces' must be an integer`);
  }

  // Scaling factor is used to scale up the number, round it and remove extra decimals.
  const scalingFactor = Math.pow(10, decimalPlaces);

  // This function turns the value into a whole number using scaling factor,
  //   round that and then translate it back into original value with rounded decimals.
  // Number.EPSILON property represents the difference
  //   between 1 and the smallest floating point number greater than 1.
  // Epsilon can eliminate rounding issues caused by small floating point number.
  // For more information:
  //  https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
  const roundedResult =
    Math.round((value + Number.EPSILON) * scalingFactor) / scalingFactor;

  // Convert roundedResult from string back to number.
  // This step also removes trailing zeros.
  return roundedResult;
}
