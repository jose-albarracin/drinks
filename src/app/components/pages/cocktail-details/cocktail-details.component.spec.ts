import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CocktailDetailsComponent } from './cocktail-details.component';
import { LayoutComponent } from '../../templates/layout/layout.component';
import { HeaderComponent } from '../../molecules/header/header.component';
import { CocktailsApiService } from 'src/app/services/cocktails-api.service';

describe('CocktailDetailsComponent', () => {
  let component: CocktailDetailsComponent;
  let fixture: ComponentFixture<CocktailDetailsComponent>;
  let mockCocktailsApiService: any;
  const activatedRouteMock = {
    params: of({ id: '1' }),
  };

  mockCocktailsApiService = {
    getCocktailDetail: jasmine.createSpy('getCocktailDetail').and.returnValue(
      of({
        drinks: [{ idDrink: '1', strDrink: 'Margarita' }],
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
    expect(fixture.componentInstance.cocktail).toEqual({
      idDrink: '1',
      strDrink: 'Margarita',
    });
  });
});
