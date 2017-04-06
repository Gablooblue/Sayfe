import { Component } from '@angular/core';
import { Nav, NavController, NavParams } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';

import { Posts } from '../../providers/posts';
import { PostsPage } from '../posts/posts';


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
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private formBuilder : FormBuilder, public postService: Posts, public alertCtrl: AlertController)
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
	/*let url = 'http://localhost:3000/posts';
	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });
	let body = JSON.stringify(this.post.value);
	return this.http.post(url, body, options).map((res: Response) => res.json()).subscribe(data => {
		alert('Posted!');
		this.navCtrl.setRoot(PostsPage)	
          }, error => {
              console.log(JSON.stringify(error.json()));
	  });*/
	this.postService.createPost(this.post.value)
	    .subscribe(res =>
	    {
		this.navCtrl.setRoot(PostsPage)	
		let alert = this.alertCtrl.create({
		    title: "Succesfully posted",
		    subTitle: "Your report has been successfully posted",
		    buttons: ['OK']
		});
		alert.present();
		
	    }, error =>
	    {
		console.log(error);
		let alert = this.alertCtrl.create({
		    title: "Error",
		    subTitle: "Your report could not be posted, try again",
		    buttons: ['OK']
		});
		alert.present();
	    });
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePostPage');
  }

}
