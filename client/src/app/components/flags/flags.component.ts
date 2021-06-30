import { Component, OnInit } from '@angular/core';

import { FlagService } from 'src/app/services/flag.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss'],
})
export class FlagsComponent implements OnInit {
  constructor(public flagService: FlagService) {}

  ngOnInit(): void {
    this.getFlags();
  }

  getFlags(): void {
    this.flagService.getFlags().subscribe((data) => {
      this.flagService.flags = data;
      this.flagService.allFlags = data;
    });
  }
}
