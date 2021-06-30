import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlagService {
  url = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) {}

  getFlags() {
    return this.http.get(this.url);
  }
}
