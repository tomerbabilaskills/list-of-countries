import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { StorageService } from '../services/storage.service';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  public showAlert: boolean = false;
  private key: string = 'email';
  private mailToCompare: string = 'demo@skills.co.il';

  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const checkMail = this.storageService.getItem(this.key);
    if (checkMail === this.mailToCompare) {
      this.showAlert = false;
      return true;
    } else {
      this.showAlert = true;
      this.router.navigate(['/login']);
    }
    return false;
  }
}
