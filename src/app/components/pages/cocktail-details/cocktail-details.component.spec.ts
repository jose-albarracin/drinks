import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CocktailDetailsComponent } from './cocktail-details.component';
import { LayoutComponent } from '../../templates/layout/layout.component';
import { HeaderComponent } from '../../molecules/header/header.component';
import { CocktailsApiService } from 'src/app/services/cocktails-api.service';

interface MockCocktailsApiService {
  getCocktailDetail: jasmine.Spy<jasmine.Func>;
}
describe('CocktailDetailsComponent', () => {
  let component: CocktailDetailsComponent;
  let fixture: ComponentFixture<CocktailDetailsComponent>;

  const activatedRouteMock = {
    params: of({ id: '1' }),
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

  const mockCocktailsApiService: MockCocktailsApiService = {
    getCocktailDetail: jasmine.createSpy('getCocktailDetail').and.returnValue(
      of({
        drinks: [resMock],
      })
    ),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CocktailDetailsComponent,
        LayoutComponent,
        HeaderComponent,
      ],
      imports: [HttpClientTestingModule, RouterModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: CocktailsApiService, useValue: mockCocktailsApiService },
      ],
    });
    fixture = TestBed.createComponent(CocktailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load cocktail data', () => {
    fixture.componentInstance.loadDataCocktail();
    fixture.detectChanges();

    expect(mockCocktailsApiService.getCocktailDetail).toHaveBeenCalledWith('1');
    expect(fixture.componentInstance.cocktail).toEqual(resMock);
  });
});
