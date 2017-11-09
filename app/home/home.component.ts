import { Component, OnInit } from '@angular/core';
 
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { PageTitleService } from "../services/page-title.service";
 
@Component({
    selector: 'app-home',
    templateUrl: 'app/home/home.component.html',
})
 
export class HomeComponent implements OnInit {
user: User;
 
    constructor(private userService: UserService,  private pageTitleService: PageTitleService) { }
 
    ngOnInit() {
    this.pageTitleService.setTitle("Home");
        // get users from secure api end point
    var user = JSON.parse(localStorage.getItem('currentUser'));
    var info = JSON.parse(localStorage.getItem('server'));
    
    console.log(user);
    console.log(info);

    console.log(this.userService.getUsers(info.server, user.username));
        this.userService.getUsers(info.server, user.username)
            .subscribe(user => {
                this.user = user;
            });
        console.log(this.user);

    }
 
}