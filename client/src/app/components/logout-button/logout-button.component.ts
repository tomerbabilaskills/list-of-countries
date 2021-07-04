import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
})
export class LogoutButtonComponent implements OnInit {
  key: string = 'email';
  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {}

  logout(): void {
    this.storageService.setItem(this.key, '');
    this.router.navigate(['/login']);
  }
}
