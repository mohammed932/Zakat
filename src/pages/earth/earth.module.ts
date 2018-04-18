import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EarthPage } from './earth';

@NgModule({
  declarations: [
    EarthPage,
  ],
  imports: [
    IonicPageModule.forChild(EarthPage),
  ],
})
export class EarthPageModule {}
