import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalsPage } from './animals';

@NgModule({
  declarations: [
    AnimalsPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalsPage),
  ],
})
export class AnimalsPageModule {}
