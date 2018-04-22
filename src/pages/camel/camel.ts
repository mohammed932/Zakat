import { AdsProvider } from './../../providers/ads/ads';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CamelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-camel',
  templateUrl: 'camel.html',
})
export class CamelPage {

  constructor(public navCtrl: NavController,
    private adService : AdsProvider,
    public navParams: NavParams) {
     this.adService.showAds()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CamelPage');
  }

}
