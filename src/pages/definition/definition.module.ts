import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefinitionPage } from './definition';

@NgModule({
  declarations: [
    DefinitionPage,
  ],
  imports: [
    IonicPageModule.forChild(DefinitionPage),
  ],
})
export class DefinitionPageModule {}
