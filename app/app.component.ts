import { Component, OnInit } from '@angular/core';
import { PageTitleService } from "./services/page-title.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  providers: [PageTitleService]

})
export class AppComponent implements OnInit {
  header: string;
  constructor(private title: Title, private pageTitleService : PageTitleService){
  }

  ngOnInit(){
    this.pageTitleService.title.subscribe((val: string) => {
      this.header = val;
  });

  }
}
