import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Posts } from '../../providers/posts';

import { DetailsPage } from '../details/details';
import { CreatePostPage } from '../create-post/create-post';

/*
  Generated class for the Posts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class PostsPage {
    posts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public postService: Posts) 
  {
      this.postService.showPosts()
	  .subscribe((res) =>
	  {
	    this.posts = res;
	  },
	  (err)=>
	  {
	      console.log(err);
	      alert("Error retrieving posts");
	  });

  }    
  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
  }

    postTapped(event, post)
    {
	this.navCtrl.push(DetailsPage, { post: post });
    }

    redirectToCreate(event)
    {
	this.navCtrl.push(CreatePostPage)
    }

}
