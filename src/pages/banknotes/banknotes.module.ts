import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BanknotesPage } from './banknotes';

@NgModule({
  declarations: [
    BanknotesPage,
  ],
  imports: [
    IonicPageModule.forChild(BanknotesPage),
  ],
})
export class BanknotesPageModule {}
