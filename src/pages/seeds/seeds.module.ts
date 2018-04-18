import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeedsPage } from './seeds';

@NgModule({
  declarations: [
    SeedsPage,
  ],
  imports: [
    IonicPageModule.forChild(SeedsPage),
  ],
})
export class SeedsPageModule {}
