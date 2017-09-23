import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Slides } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  showPrev: any;
  showNext: any;
  currentIndex: any;

  @ViewChild(Content) content: Content;
  @ViewChild('mySlider') slider: Slides;

  slidertab: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let id = this.navParams.get("id");
    this.slidertab = 0;
    console.log("id", id);
    setTimeout(() => {
      this.goToSlide(id);

    }, 500)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToSlide(id) {
    this.slider.slideTo(id, 500);
  }

  slideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    this.slidertab = currentIndex;
    console.log("Current index is", currentIndex);
  }

  tripdetail() {
    this.navCtrl.push('TripdetailPage');
  }


  search() {
    this.navCtrl.push('SearchPage');
  }


}
