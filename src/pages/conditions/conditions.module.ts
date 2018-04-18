import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConditionsPage } from './conditions';

@NgModule({
  declarations: [
    ConditionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConditionsPage),
  ],
})
export class ConditionsPageModule {}
