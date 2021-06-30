import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlagService {
  public flags: any;
  public allFlags: any;
  public filterWord: string = '';

  url = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  getFlags(): Observable<Object> {
    return this.http.get(`${this.url}/all`);
  }

  deleteFlag(name: string): void {
    this.flags = this.flags.filter((f: any) => f.name !== name);
  }

  resetFlags(): void {
    this.flags = this.allFlags;
  }

  flagsForDisplay(): any {
    return this.filterWord.length > 0
      ? this.flags.filter((f: any) =>
          f.name.toLowerCase().includes(this.filterWord.toLowerCase())
        )
      : this.flags;
  }
}
