import { NgModule } from '@angular/core';
import { UndefinedPipe } from './undefined.pipe';

/**
 * Module of UndefinedPipe that is used for
 *  replacing undefined/null value with mdash.
 */
@NgModule({
  declarations: [UndefinedPipe],
  exports: [UndefinedPipe],
})
export class UndefinedPipeModule {}
