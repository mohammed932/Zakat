import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoungPage } from './young';

@NgModule({
  declarations: [
    YoungPage,
  ],
  imports: [
    IonicPageModule.forChild(YoungPage),
  ],
})
export class YoungPageModule {}
