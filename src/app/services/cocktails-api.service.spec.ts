import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CocktailsApiService } from './cocktails-api.service';

describe('CocktailsApiService', () => {
  let service: CocktailsApiService;
  let httpMock: HttpTestingController;

  const resMock = {
    idDrink: '1',
    strDrink: 'A1',
    strDrinkAlternate: null,
    strTags: null,
    strVideo: null,
    strCategory: 'Cocktail',
    strIBA: null,
    strAlcoholic: 'Alcoholic',
    strGlass: 'Cocktail glass',
    strInstructions: '...',
    strInstructionsES: '...',
    strInstructionsDE: '...',
    strInstructionsFR: null,
    strInstructionsIT: '...',
    strInstructionsZH_HANS: null,
    strInstructionsZH_HANT: null,
    strDrinkThumb: '...',
    strIngredient1: 'Gin',
    strIngredient2: 'Grand Marnier',
    strIngredient3: 'Lemon Juice',
    strIngredient4: 'Grenadine',
    strIngredient5: null,
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strMeasure1: '1 3/4 shot ',
    strMeasure2: '1 Shot ',
    strMeasure3: '1/4 Shot',
    strMeasure4: '1/8 Shot',
    strMeasure5: null,
    strMeasure6: null,
    strMeasure7: null,
    strMeasure8: null,
    strMeasure9: null,
    strMeasure10: null,
    strMeasure11: null,
    strMeasure12: null,
    strMeasure13: null,
    strMeasure14: null,
    strMeasure15: null,
    strImageSource: null,
    strImageAttribution: null,
    strCreativeCommonsConfirmed: 'No',
    dateModified: '2017-09-07 21:42:09',
  };
  const resMock2 = {
    idDrink: '2',
    strDrink: 'A1',
    strDrinkAlternate: null,
    strTags: null,
    strVideo: null,
    strCategory: 'Cocktail',
    strIBA: null,
    strAlcoholic: 'Alcoholic',
    strGlass: 'Cocktail glass',
    strInstructions: '...',
    strInstructionsES: '...',
    strInstructionsDE: '...',
    strInstructionsFR: null,
    strInstructionsIT: '...',
    strInstructionsZH_HANS: null,
    strInstructionsZH_HANT: null,
    strDrinkThumb: '...',
    strIngredient1: 'Gin',
    strIngredient2: 'Grand Marnier',
    strIngredient3: 'Lemon Juice',
    strIngredient4: 'Grenadine',
    strIngredient5: null,
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strMeasure1: '1 3/4 shot ',
    strMeasure2: '1 Shot ',
    strMeasure3: '1/4 Shot',
    strMeasure4: '1/8 Shot',
    strMeasure5: null,
    strMeasure6: null,
    strMeasure7: null,
    strMeasure8: null,
    strMeasure9: null,
    strMeasure10: null,
    strMeasure11: null,
    strMeasure12: null,
    strMeasure13: null,
    strMeasure14: null,
    strMeasure15: null,
    strImageSource: null,
    strImageAttribution: null,
    strCreativeCommonsConfirmed: 'No',
    dateModified: '2017-09-07 21:42:09',
  };

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
    const mockData = { drinks: [resMock, resMock2] };

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
    const mockData = { drinks: [resMock] };
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
