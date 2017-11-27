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
  errorMsg: String;

  constructor(private authenticationService: AuthService, private router: Router, private pageTitleService: PageTitleService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    this.pageTitleService.setTitle("Connexion");
    this.pageTitleService.setEnableBackBtn(true);
    this.pageTitleService.setEnableDropdownBtn(false);
  }

  login() {
    this.authenticationService.login(this.model.server, this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.loading = true;
          this.router.navigate(['/userspace/librairies']);
        } else {
          // login failed
          
        }
      },
      error => {
        if(error.status === 400){
          this.errorMsg = "L'email ou le mot de passe est incorrecte !"
        }
        else{
          this.errorMsg = "Une erreur technique est survenue !"
        }
      });
  }
}
