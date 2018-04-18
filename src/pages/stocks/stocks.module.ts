import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StocksPage } from './stocks';

@NgModule({
  declarations: [
    StocksPage,
  ],
  imports: [
    IonicPageModule.forChild(StocksPage),
  ],
})
export class StocksPageModule {}
