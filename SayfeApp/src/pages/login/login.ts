import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { RegisterPage } from '../register/register';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    private login : FormGroup;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private formBuilder: FormBuilder) {
	this.login = this.formBuilder.group
	({
	    username: ['', Validators.required],
	    password: ['', Validators.required],
	})
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
    regRedirect()
    {
	this.navCtrl.push(RegisterPage);
    }

    login()
    {
	//TODO Login
    }
 
}
