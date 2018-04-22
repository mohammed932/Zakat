import { AdsProvider } from './../../providers/ads/ads';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CharityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-charity',
  templateUrl: 'charity.html',
})
export class CharityPage {

  constructor(public navCtrl: NavController,
    private adService : AdsProvider,
    public navParams: NavParams) {
     this.adService.showAds()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityPage');
  }

}
