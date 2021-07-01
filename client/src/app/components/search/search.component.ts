import { Component, OnInit } from '@angular/core';

import { FlagService } from 'src/app/services/flag.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  key: string = 'flags';

  constructor(
    private flagService: FlagService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    let checkStorage = this.storageService.getItem(this.key);
    if (checkStorage === null) {
      this.storageService.setItem(this.key, JSON.stringify([]));
    }
  }

  changeFilterWord(term: string): void {
    if (term) {
      const storage: string[] = JSON.parse(
        this.storageService.getItem(this.key)!
      );
      if (storage.length === 5) storage.pop();
      storage.unshift(term);
      this.storageService.setItem(this.key, JSON.stringify(storage));
    }

    this.flagService.filterWord = term;
  }

  getRecentSearches(): string[] {
    return JSON.parse(this.storageService.getItem(this.key)!);
  }
}
