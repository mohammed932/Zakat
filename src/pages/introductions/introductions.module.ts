import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroductionsPage } from './introductions';

@NgModule({
  declarations: [
    IntroductionsPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroductionsPage),
  ],
})
export class IntroductionsPageModule {}
