import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { DisasterPage} from '../disaster/disaster'

/*
  Generated class for the Disasters page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-disasters',
  templateUrl: 'disasters.html'
})
export class DisastersPage {
    disasters: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
	this.http.get('http://localhost:3000/disasters').map(res => res.json()).subscribe(data => 
	    {this.disasters = data;
	});
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisastersPage');
  }
    
    disasterTapped(event, disaster)
    {
	this.navCtrl.push(DisasterPage, { disaster: disaster });
    }
}
