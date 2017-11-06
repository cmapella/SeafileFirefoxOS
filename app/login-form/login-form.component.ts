import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControlDirective, FormControlName, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: 'app/login-form/login-form.component.html',
  styleUrls: ['app/login-form/login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      server_address: ['',Validators.required],
      email: ['',Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });

    let login = {
      server_address: 'http://',
      email: '',
      password: ''
    }

    this.form.setValue(login);
  }

  onSubmit(form: any): void {
    console.log(form);
    if(form.valid){
      let link = [""];
      this.router.navigate(link);
    }
  }
}
