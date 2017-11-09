import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageTitleService } from "../services/page-title.service";

@Component({
  selector: 'app-accueil',
  templateUrl: 'app/accueil/accueil.component.html',
  styleUrls: ['app/accueil/accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private pageTitleService: PageTitleService, private router:Router) { }

  ngOnInit() {
    this.pageTitleService.setEnableBackBtn(false);
  }

  redirectToLogin(): void {
    let link = ['/login'];
    this.router.navigate(link);
}

}
