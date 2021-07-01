import { Component, OnInit } from '@angular/core';

import { FlagService } from 'src/app/services/flag.service';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.scss'],
})
export class ResetButtonComponent implements OnInit {
  constructor(public flagService: FlagService) {}

  ngOnInit(): void {}
}
