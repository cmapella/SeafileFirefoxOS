import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MomentModule } from 'angular2-moment';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeRoutingModule } from "./home/home-routing.module";
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from "./home/home.component";


import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { LibraryService } from "./services/library.service";
import { AuthGuard } from "./guards/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    LoginFormComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HomeRoutingModule,
    MomentModule
  ],
  providers: [AuthService, UserService, LibraryService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
