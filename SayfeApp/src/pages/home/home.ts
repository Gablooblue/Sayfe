import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

   public user: any;
   constructor(public navCtrl: NavController, public storage: Storage) {
       
       this.storage.get('user').then((value) => {
	   if(value != null)
	   {    
	       this.user = JSON.parse(value);
	       //console.log(this.user);
	   }	    
       });
       this.storage.get('token').then((v) =>
	{
	    console.log(v);
	});
  }

}
