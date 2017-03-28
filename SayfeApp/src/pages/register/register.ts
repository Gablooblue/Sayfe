import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
    
    private reigster: FormGroup;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private formBuilder : FormBuilder) 
    {
	this.register = this.formBuilder.group
	({
	    name: ['', Validators.required],
	    username: ['', Validators.required],
	    email: ['', Validators.required],
	    password: ['', Validators.required],
	    confirmpassword: ['', Validators.required],

	})
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

    register()
    {
	//TODO this shit
    }

}
