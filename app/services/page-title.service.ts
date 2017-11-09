import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PageTitleService {
    public title: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    public enableBackBtn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

    setTitle(value: string) {
        this.title.next(value);
    }

    setEnableBackBtn(value: boolean){
        this.enableBackBtn.next(value);
    }
    
}