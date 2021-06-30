import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlagService {
  url = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  getFlags(): Observable<Object> {
    return this.http.get(`${this.url}/all`);
  }
}
