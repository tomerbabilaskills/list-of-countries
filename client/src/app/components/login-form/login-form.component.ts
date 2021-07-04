import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginGuard } from 'src/app/guards/login.guard';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(private loginGuard: LoginGuard, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(value: string): void {
    this.loginGuard.userMail = value;
    this.router.navigate(['/flags']);
  }
}
