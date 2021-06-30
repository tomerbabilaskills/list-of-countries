import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FlagService } from 'src/app/services/flag.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss'],
})
export class FlagsComponent implements OnInit {
  flags: any;

  constructor(private flagService: FlagService) {}

  ngOnInit(): void {
    this.getFlags();
  }

  getFlags() {
    this.flagService.getFlags().subscribe((data) => (this.flags = data));
  }
}
