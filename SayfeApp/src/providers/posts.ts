import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';

/*
  Generated class for the Posts provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Posts {

  constructor(public http: Http) {
  }

    showPosts()
    {
	return new Observable(observer => 
	{
	    let url = 'http://localhost:3000/posts';
	    this.http.get(url)
	    .map(res => res.json())
	    .subscribe( res =>
	    {
		observer.next(res);
	    },
	    (err) => 
	    {
		console.log(err);
		alert("Error retrieving posts");
	    });
	});	
    }

    createPost(post)
    {
	let url = 'http://localhost:3000/posts';
	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });
	let body = JSON.stringify(post);
	return new Observable (observer =>
	{
	    this.http.post(url, body, options).map((res: Response) => res.json()).subscribe(res => {
		observer.next(res);
	      }, error => {
		  console.log(JSON.stringify(error.json()));
	      });
	});
    }	

 }
