import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
 
@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthService) {
    }
 
    getUsers(server: string, username: string): Observable<User> {
        // add authorization header with jwt token
        console.log(this.authenticationService.token);
        let headers = new Headers({ 'Authorization': 'Token ' + this.authenticationService.token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log(headers);
        console.log(options);
 
        // get users from api
        return this.http.get(server+'/api2/accounts/'+username+'/', options)
            .map((response: Response) => response.json());
    }
}