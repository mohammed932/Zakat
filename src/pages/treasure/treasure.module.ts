import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreasurePage } from './treasure';

@NgModule({
  declarations: [
    TreasurePage,
  ],
  imports: [
    IonicPageModule.forChild(TreasurePage),
  ],
})
export class TreasurePageModule {}
