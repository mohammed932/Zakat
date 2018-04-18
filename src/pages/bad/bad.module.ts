import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BadPage } from './bad';

@NgModule({
  declarations: [
    BadPage,
  ],
  imports: [
    IonicPageModule.forChild(BadPage),
  ],
})
export class BadPageModule {}
