import { AdsProvider } from './../../providers/ads/ads';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroductionsPage } from '../introductions/introductions';
import { DefinitionPage } from '../definition/definition';
import { TypesPage } from '../types/types';
import { MonyPage } from '../mony/mony';
import { AnimalsPage } from '../animals/animals';
import { SeedsPage } from '../seeds/seeds';
import { TradingPage } from '../trading/trading';
import { MetalsPage } from '../metals/metals';
import { StocksPage } from '../stocks/stocks';
import { EarthPage } from '../earth/earth';
import { AlfitrPage } from '../alfitr/alfitr';
import { AhkamPage } from '../ahkam/ahkam';
import { CharityPage } from '../charity/charity';


/**
 * Generated class for the IntroductionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
})
export class IntroductionPage {

  constructor(public navCtrl: NavController,
    private adService : AdsProvider) {
     this.adService.showAdsWithoutInterstitial()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroductionPage');
  }

OpenIntroductionsPage() {
  this.navCtrl.push(IntroductionsPage);
}
OpenDefinitionPage(){
  this.navCtrl.push(DefinitionPage)
}
OpenTypesPag(){
  this.navCtrl.push(TypesPage)
}
OpenMonyPage(){
  this.navCtrl.push(MonyPage)
}
OpenAnimalsPage(){
  this.navCtrl.push(AnimalsPage)
}
OpenSeedsPage(){
  this.navCtrl.push(SeedsPage)
}
OpenTradingPage(){
  this.navCtrl.push(TradingPage)
}
OpenMetalsPage(){
  this.navCtrl.push(MetalsPage)
}
OpenStocksPage(){
  this.navCtrl.push(StocksPage)
}
OpenEarthPage(){
  this.navCtrl.push(EarthPage)
}
OpenAlfitrPage(){
  this.navCtrl.push(AlfitrPage)
}
OpenAhkamPage(){
  this.navCtrl.push(AhkamPage)
}
OpenCharityPage(){
  this.navCtrl.push(CharityPage)
}
}

