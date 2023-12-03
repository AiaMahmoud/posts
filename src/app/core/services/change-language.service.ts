import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeLanguageService {
  langauge: any = new BehaviorSubject<any>('ar')
  constructor() {
    if (localStorage.getItem('lang') == 'ar') {
      this.langauge.next('ar')
    } else {
      this.langauge.next('en')
    }
  }

}
