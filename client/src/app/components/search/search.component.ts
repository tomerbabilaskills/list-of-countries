import { Component, OnInit } from '@angular/core';
import { FlagService } from 'src/app/services/flag.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private flagService: FlagService) {}

  ngOnInit(): void {}

  changeFilterWord(term: string): void {
    this.flagService.filterWord = term;
    console.log(this.flagService.filterWord);
  }
}
