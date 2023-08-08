import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailsApiService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getFullListDataCocktails(): Observable<any> {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

    return this.http.get<any>(url);
  }

  getCocktailDetail(id: string): Observable<any> {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

    return this.http.get<any>(url);
  }
}
