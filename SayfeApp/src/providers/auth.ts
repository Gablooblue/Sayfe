import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Auth {
 
  public token: any;
 
  constructor(public http: Http, public storage: Storage) {
 
  }
 
  checkAuthentication(){
 
    return new Promise((resolve, reject) => {
 
        //Load token if exists
        this.storage.get('token').then((value) => {
 
	    this.token = value;
	    console.log(this.token);
            let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    //headers.append('Authorization', this.token);
	    
	    this.http.post('https://localhost:3000/auth/validate_token',this.token, {headers: headers})
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
		    console.log(err);
                    reject(err);
                }); 
 
        });         
 
    });
 
  }
 
  createAccount(details){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
	let signup_url = "http://localhost:3000/auth";
 
        this.http.post(signup_url, JSON.stringify(details), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            this.storage.set('token', data);
            resolve(data);
 
          }, (err) => {
            reject(err);
          });
 
    });
 
  }
 
  login(credentials){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
	let login_url = "http://localhost:3000/auth/sign_in";

 
        this.http.post(login_url, JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            this.storage.set('token', data);
            resolve(data);
 
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
 
    });
  }
 
  logout(){
    this.storage.set('token', '');
  }
 
}
