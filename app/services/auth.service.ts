import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
        public token: string;

        constructor(private http: Http) {
                // set token if saved in local storage
                var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.token = currentUser && currentUser.token;
        }

        login(server:string, username: string, password: string): Observable<boolean> {
        let body = JSON.stringify({ username: username, password: password });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
                return this.http.post(server+'/api2/auth-token/',body, options)
                        .map((response: Response) => {
                                // login successful if there's a jwt token in the response
                                let token = response.json() && response.json().token;
                                if (token) {
                                        console.log(token);

                                        // set token property
                                        this.token = token;

                                        // store username and jwt token in local storage to keep user logged in between page refreshes
                                        localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                                        localStorage.setItem('server',JSON.stringify({server: server}));

                                        // return true to indicate successful login
                                        return true;
                                } else {
                                        // return false to indicate failed login
                                        return false;
                                }
                        });
        }

        logout(): void {
                // clear token remove user from local storage to log user out
                this.token = null;
                localStorage.removeItem('currentUser');
        }
}