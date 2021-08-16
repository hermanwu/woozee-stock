import { NgModule } from '@angular/core';
import { IopsPipe } from './iops.pipe';

/**
 * Module of IopsPipe that is used for converting IOPS (IO per second) unit.
 */
@NgModule({
  declarations: [IopsPipe],
  exports: [IopsPipe],
})
export class IopsPipeModule {}
