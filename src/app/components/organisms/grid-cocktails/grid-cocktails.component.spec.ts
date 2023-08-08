import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCocktailsComponent } from './grid-cocktails.component';

describe('GridCocktailsComponent', () => {
  let component: GridCocktailsComponent;
  let fixture: ComponentFixture<GridCocktailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridCocktailsComponent]
    });
    fixture = TestBed.createComponent(GridCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
