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
  enableBackBtn: boolean = false;
  enableDropdownBtn: boolean = false;
  constructor(private cdRef: ChangeDetectorRef, private title: Title, private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
    this.pageTitleService.title.subscribe((val: string) => {
      this.headerTitle = val;
    });



  }


  ngAfterViewChecked() {
    this.pageTitleService.enableBackBtn.subscribe((enable: boolean) => {
      this.enableBackBtn = enable;
    });
    this.pageTitleService.enableDropdownBtn.subscribe((enable: boolean) => {
      this.enableDropdownBtn = enable;
    });
    this.cdRef.detectChanges();
    $('.dropdown-button').dropdown();
  }


  goBack(): void {
    window.history.back();
  }

}
