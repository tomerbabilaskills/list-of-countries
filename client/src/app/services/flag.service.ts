import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlagService {
  public flags: any;
  public allFlags: any;

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
}
