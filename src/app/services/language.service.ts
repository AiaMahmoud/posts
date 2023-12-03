import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  lang: any = new BehaviorSubject<any>('ar')
  constructor() {
    if (localStorage.getItem('lang') == 'en') {
      this.lang.next('en')
    } else {
      this.lang.next('ar')
    }
  }

}
