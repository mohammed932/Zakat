import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonyPage } from './mony';

@NgModule({
  declarations: [
    MonyPage,
  ],
  imports: [
    IonicPageModule.forChild(MonyPage),
  ],
})
export class MonyPageModule {}
