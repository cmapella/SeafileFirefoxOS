import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
import { AuthService } from '../services/auth.service';
import { Library } from '../models/library';
 
@Injectable()
export class LibraryService {
    
    oneDayTimeStamp: number = (24*3600)*1000;

    constructor(
        private http: Http,
        private authenticationService: AuthService) {
    }
 
    getAllLibrary(server: string): Observable<Library[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Token ' + this.authenticationService.token, 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(server+'/api2/repos', options)
            .map((response: Response) => response.json());
    }
}