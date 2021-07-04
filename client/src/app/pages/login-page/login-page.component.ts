import { Component, OnInit } from '@angular/core';

import { LoginGuard } from 'src/app/guards/login.guard';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private loginGuard: LoginGuard) {}

  ngOnInit(): void {}

  checkShowAlert(): boolean {
    return this.loginGuard.showAlert;
  }
}
