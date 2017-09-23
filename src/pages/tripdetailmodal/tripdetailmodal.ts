import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tripdetailmodal',
  templateUrl: 'tripdetailmodal.html',
})
export class TripdetailmodalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripdetailmodalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addtrip() {
    this.navCtrl.push('AddtotripPage');
    this.viewCtrl.dismiss();
  }

}
