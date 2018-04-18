import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CowPage } from './cow';

@NgModule({
  declarations: [
    CowPage,
  ],
  imports: [
    IonicPageModule.forChild(CowPage),
  ],
})
export class CowPageModule {}
