import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { GridCocktailsComponent } from './grid-cocktails.component';
import { CocktailsApiService } from 'src/app/services/cocktails-api.service';
import { CocktailPreviewComponent } from '../../molecules/cocktail-preview/cocktail-preview.component';

import { RouterModule, ActivatedRoute } from '@angular/router';

/* import { MockCocktailsApiService } from '../../../interface/cocktails.interface'; */

interface MockCocktailsApiService {
  getFullListDataCocktails: jasmine.Spy<jasmine.Func>;
}

describe('GridCocktailsComponent', () => {
  let component: GridCocktailsComponent;
  let fixture: ComponentFixture<GridCocktailsComponent>;
  let mockCocktailsApiService: MockCocktailsApiService;
  const activatedRouteMock = {
    paramMap: of({ get: () => '1' }),
  };

  const resMock = {
    idDrink: '17222',
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
    mockCocktailsApiService = {
      getFullListDataCocktails: jasmine
        .createSpy('getFullListDataCocktails')
        .and.returnValue(
          of({
            drinks: [resMock],
          })
        ),
    };
    TestBed.configureTestingModule({
      declarations: [GridCocktailsComponent, CocktailPreviewComponent],
      imports: [HttpClientTestingModule, RouterModule],
      providers: [
        { provide: CocktailsApiService, useValue: mockCocktailsApiService },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    });
    fixture = TestBed.createComponent(GridCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load cocktails data', () => {
    fixture.componentInstance.getDataCocktails();
    fixture.detectChanges();

    expect(mockCocktailsApiService.getFullListDataCocktails).toHaveBeenCalled();
    expect(fixture.componentInstance.cocktails).toEqual([resMock]);
  });
});
