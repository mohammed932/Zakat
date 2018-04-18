import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorsePage } from './horse';

@NgModule({
  declarations: [
    HorsePage,
  ],
  imports: [
    IonicPageModule.forChild(HorsePage),
  ],
})
export class HorsePageModule {}
