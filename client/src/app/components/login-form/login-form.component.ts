import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(value: string): void {
    this.loginService.userMail = value;
    this.router.navigate(['/flags']);
  }
}
