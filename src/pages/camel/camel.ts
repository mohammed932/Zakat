import { AdsProvider } from './../../providers/ads/ads';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-camel',
  templateUrl: 'camel.html',
})
export class CamelPage {

  constructor(public navCtrl: NavController,
    private adService : AdsProvider) {
     this.adService.showAds()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CamelPage');
  }

}
