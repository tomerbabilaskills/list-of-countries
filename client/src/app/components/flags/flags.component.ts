import { Component, OnInit } from '@angular/core';

import { FlagService } from 'src/app/services/flag.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss'],
})
export class FlagsComponent implements OnInit {
  allFlags: any;
  flags: any;

  constructor(private flagService: FlagService) {}

  ngOnInit(): void {
    this.getFlags();
    this.allFlags = this.flags;
  }

  getFlags(): void {
    this.flagService.getFlags().subscribe((data) => {
      this.flags = data;
      this.allFlags = data;
    });
  }

  deleteFlag(name: string): void {
    this.flags = this.flags.filter((f: any) => f.name !== name);
  }

  resetFlags(): void {
    this.flags = this.allFlags;
  }
}
