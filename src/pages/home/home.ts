import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntroductionPage } from '../introduction/introduction';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }
  OpenIntroductionPage() {
    this.navCtrl.push(IntroductionPage);
    
  
  }
//   presentToast() {
//     let toast = this.toastCtrl.create({
//       message: 'يتم التحميل',
//       duration: 3000
//     });
//     toast.present();

// }
}
