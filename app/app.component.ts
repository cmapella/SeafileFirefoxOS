import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PageTitleService } from "./services/page-title.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [PageTitleService]

})
export class AppComponent implements OnInit {
  headerTitle: string;
  enableHeader: boolean = false;
  constructor(private cdRef: ChangeDetectorRef, private title: Title, private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
    this.pageTitleService.title.subscribe((val: string) => {
      this.headerTitle = val;
    });



  }

  ngAfterViewChecked() {
    this.pageTitleService.enableBackBtn.subscribe((enable: boolean) => {
      this.enableHeader = enable;
    });
    this.cdRef.detectChanges();
  }


  goBack(): void {
    window.history.back();
  }
  
}
