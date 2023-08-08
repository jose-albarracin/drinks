import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { GridCocktailsComponent } from './grid-cocktails.component';
import { CocktailsApiService } from 'src/app/services/cocktails-api.service';
import { CocktailPreviewComponent } from '../../molecules/cocktail-preview/cocktail-preview.component';

import { RouterModule, ActivatedRoute } from '@angular/router';

describe('GridCocktailsComponent', () => {
  let component: GridCocktailsComponent;
  let fixture: ComponentFixture<GridCocktailsComponent>;
  let mockCocktailsApiService: any;
  const activatedRouteMock = {
    paramMap: of({ get: (key: string) => '1' }),
  };

  beforeEach(() => {
    mockCocktailsApiService = {
      getFullListDataCocktails: jasmine
        .createSpy('getFullListDataCocktails')
        .and.returnValue(
          of({
            drinks: [{ idDrink: '1', strDrink: 'Margarita' }],
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
    expect(fixture.componentInstance.cocktails).toEqual([
      { idDrink: '1', strDrink: 'Margarita' },
    ]);
  });
});
