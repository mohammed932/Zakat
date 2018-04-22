import { AdsProvider } from './../../providers/ads/ads';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DefinitionfPage } from '../definitionf/definitionf';
import { DefinitionsPage } from '../definitions/definitions';
import { ZakatoligationPage } from '../zakatoligation/zakatoligation';
import { RulingonzakatPage } from '../rulingonzakat/rulingonzakat';
import { TreasurePage } from '../treasure/treasure';
import { LogicalPage } from '../logical/logical';

/**
 * Generated class for the DefinitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-definition',
  templateUrl: 'definition.html',
})
export class DefinitionPage {

  constructor(public navCtrl: NavController,
    private adService : AdsProvider,
    public navParams: NavParams) {
     this.adService.showAds()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefinitionPage');
  }

OpenDefinitionfPage(){
  this.navCtrl.push(DefinitionfPage)
}
OpenDefinitionsPage(){
  this.navCtrl.push(DefinitionsPage)
}
OpenZakatoligationPage(){
  this.navCtrl.push(ZakatoligationPage)
}
OpenRulingonzakatPage(){
  this.navCtrl.push(RulingonzakatPage)
}
OpenTreasurePage(){
  this.navCtrl.push(TreasurePage)
}
OpenLogicalPage(){
  this.navCtrl.push(LogicalPage)
}
}


