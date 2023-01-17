import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseURL = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCountry(query: string): Observable<any> {
    const url = `${this.baseURL}/name/${query}`
    return this.http.get(url)
  }
}
