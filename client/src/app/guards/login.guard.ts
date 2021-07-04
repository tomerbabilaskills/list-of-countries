import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

import { LoginService } from '../services/login.service';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  mailToCompare: string = 'demo@skills.co.il';

  constructor(private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.loginService.userMail === this.mailToCompare;
  }
}
