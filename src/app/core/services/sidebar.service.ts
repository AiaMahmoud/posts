import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  sideBarSubject: any = new BehaviorSubject<any>('close');
  profileSubject: any = new BehaviorSubject<any>('changed');
  constructor() { }

  changeSideBar() {
    let sideBar = this.sideBarSubject.value
    if (sideBar == 'close') {
      this.sideBarSubject.next('open')
    } else {
      this.sideBarSubject.next('close')
    }
  }
  changeProfileImg(){
    let sideBar = this.profileSubject.value;
    console.log('Immmn... ',sideBar);
    if (sideBar == 'changed') {
      this.profileSubject.next('changed')
    } else {
      this.profileSubject.next('close')
    }
  }

}
