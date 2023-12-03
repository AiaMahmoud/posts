import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
;

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private rouetr: Router, private authenticationService: AuthenticationService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }
    this.rouetr.navigate(['auth/login']);
    return false;
  }

}
