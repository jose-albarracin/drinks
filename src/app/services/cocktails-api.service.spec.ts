import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CocktailsApiService } from './cocktails-api.service';

describe('CocktailsApiService', () => {
  let service: CocktailsApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CocktailsApiService],
    });
    service = TestBed.inject(CocktailsApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve cocktails list data', () => {
    const mockData = { drinks: [{ idDrink: '1' }, { idDrink: '2' }] };

    service.getFullListDataCocktails().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should retrieve cocktail detail data', () => {
    const mockData = { drinks: [{ idDrink: '1', strDrink: 'Margarita' }] };
    const cocktailId = '1';

    service.getCocktailDetail(cocktailId).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
