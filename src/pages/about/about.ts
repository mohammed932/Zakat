import { AdsProvider } from './../../providers/ads/ads';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
    private adService : AdsProvider) {
     this.adService.showAds()
  }

}
