import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free';
@Injectable()
export class AdsProvider {

  constructor(private platform: Platform, private admobFree: AdMobFree) {
  }

  showAds() {
    this.platform.ready().then(() => {
      this.launchBannerAd()
      this.launchInterstitial()
      this.launchVideoAd()
    })
  }


  launchBannerAd() {
    // const bannerConfig: AdMobFreeBannerConfig = {
    //   id: 'ca-app-pub-7447959077215583/2122600967',
    //   autoShow: true,
    // }
    // this.admobFree.banner.config(bannerConfig)
    // this.admobFree.banner.prepare().then(() => {
    //   //
    // }).catch(e => {
    //   console.error(e);
    // })
  }

  launchInterstitial() {

    // let interstitialConfig: AdMobFreeInterstitialConfig = {
    //   autoShow: true,
    //   id: 'ca-app-pub-7447959077215583/1941068292'
    // };

    // this.admobFree.interstitial.config(interstitialConfig);

    // this.admobFree.interstitial.prepare().then(() => {
    //   // success
    // });

  }

  launchVideoAd() {
    // let interstitialConfig: AdMobFreeRewardVideoConfig = {
    //   autoShow: true,
    //   id: 'ca-app-pub-7447959077215583/1853438388'
    // };

    // this.admobFree.rewardVideo.config(interstitialConfig);

    // this.admobFree.rewardVideo.prepare().then(() => {
    //   // success
    // });
  }

}
