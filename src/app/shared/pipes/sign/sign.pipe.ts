import { Pipe, PipeTransform } from '@angular/core';

/**
 * Add a sign to string.
 */
@Pipe({
  name: 'sign',
})
export class SignPipe implements PipeTransform {
  /**
   * Transform null and undefined values to '\u2014' (an EM dash); otherwise
   * return the original value
   *
   * @param value Transform target
   * @returns Original object or EmDash
   */
  transform(value: string | number): string | number {
    if (typeof value === 'string') {
    }

    return value;
  }
}
