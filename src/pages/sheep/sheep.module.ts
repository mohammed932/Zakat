import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SheepPage } from './sheep';

@NgModule({
  declarations: [
    SheepPage,
  ],
  imports: [
    IonicPageModule.forChild(SheepPage),
  ],
})
export class SheepPageModule {}
