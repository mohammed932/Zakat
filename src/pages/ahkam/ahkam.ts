import { AdsProvider } from './../../providers/ads/ads';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoungPage } from '../young/young';
import { DebtPage } from '../debt/debt';
import { BadPage } from '../bad/bad';
import { WifePage } from '../wife/wife';
import { CountryPage } from '../country/country';
import { ProjectionPage } from '../projection/projection';
import { DebtorPage } from '../debtor/debtor';
import { TaxesPage } from '../taxes/taxes';
import { AcceleratingPage } from '../accelerating/accelerating';
import { DelayPage } from '../delay/delay';
import { RichPage } from '../rich/rich';

/**
 * Generated class for the AhkamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ahkam',
  templateUrl: 'ahkam.html',
})
export class AhkamPage {

  constructor(public navCtrl: NavController,
    private adService : AdsProvider,
    public navParams: NavParams) {
     this.adService.showAds()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AhkamPage');
  }
  OpenYoungPage(){
    this.navCtrl.push(YoungPage)
  }
  OpenDebtPage(){
    this.navCtrl.push(DebtPage)
  }
  OpenBadPage(){
    this.navCtrl.push(BadPage)
  }
  OpenWifePage(){
    this.navCtrl.push(WifePage)
  }
  OpenCountryPage(){
    this.navCtrl.push(CountryPage)
  }
  OpenProjectionPage(){
    this.navCtrl.push(ProjectionPage)
  }
  OpenDebtorPage(){
    this.navCtrl.push(DebtorPage)
  }
  OpenTaxesPage(){
    this.navCtrl.push(TaxesPage)
  }
  OpenAcceleratingPage(){
    this.navCtrl.push(AcceleratingPage)
  }
  OpenDelayPage(){
    this.navCtrl.push(DelayPage)
  }
  OpenRichPage(){
    this.navCtrl.push(RichPage)
  }
}

