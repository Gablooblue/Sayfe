import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Disaster page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-disaster',
  templateUrl: 'disaster.html'
})
export class DisasterPage {
    
    disaster: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.disaster = navParams.get('disaster');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisasterPage');
  }

}
