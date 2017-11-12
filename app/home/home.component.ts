import { Component, OnInit } from '@angular/core';

import { Library } from '../models/library';
import { LibraryService } from '../services/library.service';
import { PageTitleService } from "../services/page-title.service";


@Component({
    selector: 'app-home',
    templateUrl: 'app/home/home.component.html',
})

export class HomeComponent implements OnInit {
    libraries: Library[] = [];

        constructor(private libraryService: LibraryService, private pageTitleService: PageTitleService) { }

        ngOnInit() {
        this.pageTitleService.setTitle("Home");
        this.pageTitleService.setEnableBackBtn(true);
        this.pageTitleService.setEnableDropdownBtn(true);
                // get users from secure api end point
        var user = JSON.parse(localStorage.getItem('currentUser'));
        var info = JSON.parse(localStorage.getItem('server'));

        this.libraryService.getAllLibrary(info.server).subscribe(libraries => {
            console.log(libraries);
            this.libraries = libraries;
        });

    }

}