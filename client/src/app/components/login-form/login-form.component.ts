import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  key: string = 'email';
  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {}

  onSubmit(value: string): void {
    this.storageService.setItem(this.key, value);
    this.router.navigate(['/flags']);
  }
}
