import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Auth } from '../../providers/auth';
import { Storage } from '@ionic/storage';

import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

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

    private user_login : FormGroup;
    public user : any;
    public error: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private formBuilder: FormBuilder, public authService: Auth, public storage: Storage) {
	this.user_login = this.formBuilder.group
	({
	    email: ['', Validators.required],
	    password: ['', Validators.required],
	})
    }

  ionViewDidLoad() {

    this.authService.checkAuthentication().then((res) => {
            console.log("Already authorized");
            this.navCtrl.setRoot(HomePage);
        }, (err) => {
            console.log("Not already authorized");
        });
    console.log('ionViewDidLoad LoginPage');
  }
  
    regRedirect()
    {
	this.navCtrl.push(RegisterPage);
    }

    loginUser()

    {
	/*TODO get the right url for this 
	let url = "http://localhost:3000/auth/sign_in";
	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });
	let body = JSON.stringify(this.user.value);
	return this.http.post(url, body, options).map((res: Response) => res.json()).subscribe(data => {
		alert('Successfully signed up!');
		this.navCtrl.setRoot(HomePage)	
          }, error => {
              console.log(JSON.stringify(error.json()));
	});*/
	this.authService.login(this.user_login.value).then((result) =>{
	    this.storage.set('user', JSON.stringify(result));
	    this.navCtrl.setRoot(HomePage);
	}, (err) =>
	    {
		console.log(err);
		this.error = err.json();
	    }
	);
    }    
 
}
