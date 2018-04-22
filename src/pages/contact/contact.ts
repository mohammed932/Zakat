import { AdsProvider } from './../../providers/ads/ads';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
    private adService : AdsProvider) {
     this.adService.showAds()
  }

}
