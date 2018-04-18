import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CamelPage } from './camel';

@NgModule({
  declarations: [
    CamelPage,
  ],
  imports: [
    IonicPageModule.forChild(CamelPage),
  ],
})
export class CamelPageModule {}
