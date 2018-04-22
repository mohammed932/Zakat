import { AdsProvider } from './../../providers/ads/ads';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoldPage } from '../gold/gold';
import { SilverPage } from '../silver/silver';
import { BanknotesPage } from '../banknotes/banknotes';

/**
 * Generated class for the MonyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mony',
  templateUrl: 'mony.html',
})
export class MonyPage {

  constructor(public navCtrl: NavController,
    private adService : AdsProvider,
    public navParams: NavParams) {
     this.adService.showAds()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonyPage');
  }
  OpenGoldPage(){
    this.navCtrl.push(GoldPage)
  }
  OpenSilverPage(){
    this.navCtrl.push(SilverPage)
  }
  OpenBanknotesPage(){
    this.navCtrl.push(BanknotesPage)
  }
}
