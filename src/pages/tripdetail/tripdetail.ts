import { Component,ViewChild,ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
declare var google;

@IonicPage()
@Component({
  selector: 'page-tripdetail',
  templateUrl: 'tripdetail.html',
})
export class TripdetailPage {
	  @ViewChild('map') mapElement: ElementRef;
map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad(){
    this.loadMap();
  }
  
    goBack(){
  this.navCtrl.pop();
}
loadMap(){

   let latLng = new google.maps.LatLng(-34.9290, 138.6010);

   let mapOptions = {
     center: latLng,
     zoom: 15,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   }

   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

 }
 
 
   tripmodal() {
       let modal = this.modalCtrl.create('TripdetailmodalPage');
       modal.present();
     }
	 
	  addtrip(){
     this.navCtrl.push('AddtotripPage');
  }

}
