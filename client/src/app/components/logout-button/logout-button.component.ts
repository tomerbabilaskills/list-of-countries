import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginGuard } from 'src/app/guards/login.guard';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
})
export class LogoutButtonComponent implements OnInit {
  constructor(private loginGuard: LoginGuard, private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this.loginGuard.userMail = '';
    this.router.navigate(['/']);
  }
}
