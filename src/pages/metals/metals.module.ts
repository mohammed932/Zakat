import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MetalsPage } from './metals';

@NgModule({
  declarations: [
    MetalsPage,
  ],
  imports: [
    IonicPageModule.forChild(MetalsPage),
  ],
})
export class MetalsPageModule {}
