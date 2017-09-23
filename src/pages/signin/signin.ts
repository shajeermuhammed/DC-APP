import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  

  
  signup() {
       let modal = this.modalCtrl.create('SignupPage');
       modal.present();
     }
  
  home(){
     this.navCtrl.push('WelcomePage');
  }

}
