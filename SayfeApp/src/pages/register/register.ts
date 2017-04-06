import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Auth } from '../../providers/auth';

import { HomePage } from '../home/home';

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
    
    private user_register : FormGroup;
    public error: any;
    public errors: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private formBuilder : FormBuilder, public authService : Auth) 
    {
	this.user_register = this.formBuilder.group
	({
	    first_name: ['', Validators.required],
	    last_name: ['', Validators.required],
	    email: ['', Validators.required],
	    password: ['', Validators.required],
	    password_confirmation: ['', Validators.required],

	})
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

    registerUser()
    {
	/*
	let url = "http://localhost:3000/auth";
	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });
	let body = JSON.stringify(this.user.value);
	return this.http.post(url, body, options).map((res: Response) => res.json()).subscribe(data => {
		alert('Successfully signed up!');
		this.navCtrl.setRoot(HomePage)	
          }, error => {
              console.log(JSON.stringify(error.json()));
	  });*/
	this.authService.createAccount(this.user_register.value).then((result) =>{
	    console.log(result);
	    this.navCtrl.setRoot(HomePage);
	}, (err) =>
	    {
		console.log(err);
		this.error = err.json();
		this.errors = this.error.full_messages;
	    }
	);
    }

}
