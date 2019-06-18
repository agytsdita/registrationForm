import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


import { Users } from './users';

@Injectable()
export class UsersService {
    //URLs for CRUD operations
	usersUrl = "http://localhost:8080/users/users";
	//Create constructor to get Http instance
	constructor(private http:Http) { 
	}
	//Create users
    createUsers(users: Users):Observable<any> {
	    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
		return this.http.post(this.usersUrl, users, options);
    }
		
	private extractData(res: Response) {
	    let body = res.json();
        return body;
    }
    private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.status);
    }
}