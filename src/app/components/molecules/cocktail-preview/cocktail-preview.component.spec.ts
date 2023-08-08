import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailPreviewComponent } from './cocktail-preview.component';

describe('CocktailPreviewComponent', () => {
  let component: CocktailPreviewComponent;
  let fixture: ComponentFixture<CocktailPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocktailPreviewComponent]
    });
    fixture = TestBed.createComponent(CocktailPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
