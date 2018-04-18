import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DebtorPage } from './debtor';

@NgModule({
  declarations: [
    DebtorPage,
  ],
  imports: [
    IonicPageModule.forChild(DebtorPage),
  ],
})
export class DebtorPageModule {}
