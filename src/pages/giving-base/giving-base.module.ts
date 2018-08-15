import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GivingBasePage } from './giving-base';

@NgModule({
  declarations: [
    GivingBasePage,
  ],
  imports: [
    IonicPageModule.forChild(GivingBasePage),
  ],
})
export class GivingBasePageModule {}
