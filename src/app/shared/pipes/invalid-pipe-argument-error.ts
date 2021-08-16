// Source code of stringify method: https://github.com/angular/angular/blob/10.0.12/packages/core/src/util/stringify.ts
import { Type, ɵstringify as stringify } from '@angular/core';

/**
 * Inspired from https://github.com/angular/angular/blob/10.0.12/packages/common/src/pipes/invalid_pipe_argument_error.ts
 * @param type Type that a pipe is an instance of.
 * @param value Information about the error.
 *
 * @returns Error of the pipe.
 */
export function invalidPipeArgumentError<T, V>(type: Type<T>, value: V): Error {
  return new Error(
    `InvalidPipeArgument: '${value}' for pipe '${stringify(type)}'`
  );
}
