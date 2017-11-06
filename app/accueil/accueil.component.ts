import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: 'app/accueil/accueil.component.html',
  styleUrls: ['app/accueil/accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redirectToLogin(): void {
    let link = ['/login'];
    this.router.navigate(link);
}

}
