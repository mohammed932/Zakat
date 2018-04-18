import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaxesPage } from './taxes';

@NgModule({
  declarations: [
    TaxesPage,
  ],
  imports: [
    IonicPageModule.forChild(TaxesPage),
  ],
})
export class TaxesPageModule {}
