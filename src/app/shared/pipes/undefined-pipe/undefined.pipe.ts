import { Pipe, PipeTransform } from '@angular/core';
import { UnicodeCharacters } from '../../data/enum/unicode-characters.enum';

/**
 * Transform a null or undefined value into a dash character
 *
 * @example
 * ```
 * @Component({
 *  selector: 'undefined-pipe',
 *  template: `
 *    <p>Size: {{ rack.size | undefined }}</p>
 *  `
 * })
 * export class UndefinedPipeComponent {
 *   rack = {
 *     size: 8
 *   }
 * }
 * ```
 */
@Pipe({
  name: 'undefined',
})
export class UndefinedPipe implements PipeTransform {
  /**
   * Transform null and undefined values to '\u2014' (an EM DASH); otherwise
   * return the original value
   *
   * @param value Transform target
   * @returns Original object or EmDash
   */
  transform<T>(value: T): T | UnicodeCharacters.EmDash {
    if (value === null || value === undefined) {
      return UnicodeCharacters.EmDash;
    }

    return value;
  }
}
