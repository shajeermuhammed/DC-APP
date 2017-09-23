import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-addtotrip',
  templateUrl: 'addtotrip.html',
})
export class AddtotripPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtotripPage');
  }

  
      goBack(){
  this.navCtrl.pop();
}
}
