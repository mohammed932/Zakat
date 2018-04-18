import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RichPage } from './rich';

@NgModule({
  declarations: [
    RichPage,
  ],
  imports: [
    IonicPageModule.forChild(RichPage),
  ],
})
export class RichPageModule {}
