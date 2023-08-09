import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApiCocktail } from '../interface/cocktails.interface';

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

  getFullListDataCocktails(): Observable<ResponseApiCocktail> {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

    return this.http.get<ResponseApiCocktail>(url);
  }

  getCocktailDetail(id: string): Observable<ResponseApiCocktail> {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

    return this.http.get<ResponseApiCocktail>(url);
  }
}
