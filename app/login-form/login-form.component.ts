import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { PageTitleService } from "../services/page-title.service";
@Component({
  selector: 'app-login-form',
  templateUrl: 'app/login-form/login-form.component.html',
  styleUrls: ['app/login-form/login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(private authenticationService: AuthService, private router: Router, private pageTitleService: PageTitleService) { }

  ngOnInit() {
    // reset login status
    
    this.authenticationService.logout();
    this.pageTitleService.setTitle("Connexion");
    this.pageTitleService.setEnableBackBtn(true);
  }

  login() {
    this.loading = true;
    console.log(this.model);
    this.authenticationService.login(this.model.server, this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.router.navigate(['/userspace/librairies']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }
}
