import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/*
  Generated class for the CreatePost page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-post',
  templateUrl: 'create-post.html'
})
export class CreatePostPage {
    disasters: any;
    private post : FormGroup;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private formBuilder : FormBuilder)
    {
	this.http.get('http://localhost:3000/disasters').map(res => res.json()).subscribe(data => 
	    {this.disasters = data;
	});

	this.post = this.formBuilder.group
	({
	    disaster_id: ['', Validators.required],
	    intensity: [''],
	    desc: [''],
	    user_id: [1],
	    latitude: [1],
	    longtitude: [1],
	})

    }

    postForm()
    {
	//TODO fix this shit
	let headers = new Headers({
	    'Content-Type': 'application/x-www-form-urlencoded'
	});
	//let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });
	//let body = JSON.stringify(this.post.value);
	let body = 'disaster_id=' + 1 + '&intensity=' + 'High' + '&desc=' + 'text'+ '&user_id=' + 1 +'&latitude=' + 1 + '&longtitude=' + 1;
	return this.http.post('http://localhost:3000/posts', body, options).map((res: Response) => res.json());
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePostPage');
  }

}
