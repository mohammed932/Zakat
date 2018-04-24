import { AdsProvider } from './../../providers/ads/ads';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DefinitionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-definitions',
  templateUrl: 'definitions.html',
})
export class DefinitionsPage {

  constructor(public navCtrl: NavController,
    private adService : AdsProvider) {
     this.adService.showAds()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefinitionsPage');
  }

}
