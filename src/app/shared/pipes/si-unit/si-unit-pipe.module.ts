import { NgModule } from '@angular/core';
import { SiUnitPipe } from './si-unit.pipe';

/**
 * Module of SiUnit pipe to display number in SI writing style format.
 */
@NgModule({
  declarations: [SiUnitPipe],
  exports: [SiUnitPipe],
})
export class SiUnitPipeModule {}
