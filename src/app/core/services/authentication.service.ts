// import { authBaseUrl, baseUrl, confgBaseUrl } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/models/login';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  login(user: Login) {
    console.log('User : ',user);
    if (user.password && user.userName) {
      if (user.userName == 'admin' && user.password == 'admin') {
        localStorage.setItem('user', 'admin');
        return Observable.create((observer:any) => observer.next('admin'));
      } else if (user.userName == 'user' && user.password == 'user') {
        localStorage.setItem('user', 'user');
        return Observable.create((observer:any) => observer.next('user'));
      } else {
        return Observable.create((observer:any) => observer.next(false));
      }
    }
    else{
      return Observable.create((observer:any) => observer.next(false));
    }
  }

  logOutCallHandling() {
    localStorage.removeItem('user');
    this.router.navigate(['auth/login']);
  }
}



