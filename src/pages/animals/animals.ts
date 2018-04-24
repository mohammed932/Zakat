import { AdsProvider } from './../../providers/ads/ads';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvidencePage } from '../evidence/evidence';
import { ConditionsPage } from '../conditions/conditions';
import { CamelPage } from '../camel/camel';
import { CowPage } from '../cow/cow';
import { SheepPage } from '../sheep/sheep';
import { HorsePage } from '../horse/horse';

/**
 * Generated class for the AnimalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-animals',
  templateUrl: 'animals.html',
})
export class AnimalsPage {

  constructor(public navCtrl: NavController,
    private adService : AdsProvider) {
     this.adService.showAds()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalsPage');
  }
  OpenEvidencePage(){
    this.navCtrl.push(EvidencePage)
  }
  OpenConditionsPage(){
    this.navCtrl.push(ConditionsPage)
  }
  OpenCamelPage(){
    this.navCtrl.push(CamelPage)
  }
  OpenCowPage(){
    this.navCtrl.push(CowPage)
  }
  OpenSheepPage(){
    this.navCtrl.push(SheepPage)
  }
  OpenHorsePage(){
    this.navCtrl.push(HorsePage)
  }
}

