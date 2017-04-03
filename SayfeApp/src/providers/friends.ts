import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';

@Injectable()
export class Friends {

    constructor(public http: Http)
    {
	showFriends()
	{
	    return new Observable(observer =>
	    {
		let url = "http://localhost:3000/friends";
		this.http.get(url)
		.map(res => res.json())
		.subscribe( res =>
		{
		    observer.next(res);
		},
		(err) =>
		{
		    console.log(err);
		    alert("Error ")
		})

	    });
	}
    }

}
