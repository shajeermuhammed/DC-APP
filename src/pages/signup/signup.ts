import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
    dismiss(){
 this.viewCtrl.dismiss();
}

login(){
     this.navCtrl.push('SigninPage');
	  this.viewCtrl.dismiss();
  }

}
