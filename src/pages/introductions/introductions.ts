import { AdsProvider } from './../../providers/ads/ads';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-introductions',
  templateUrl: 'introductions.html',
})
export class IntroductionsPage {

  constructor(public navCtrl: NavController,
    private adService : AdsProvider,
    public navParams: NavParams) {
     this.adService.showAds()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroductionsPage');
  }

}
