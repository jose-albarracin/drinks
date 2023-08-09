import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { LayoutComponent } from '../../templates/layout/layout.component';
import { GridCocktailsComponent } from '../../organisms/grid-cocktails/grid-cocktails.component';
import { HeaderComponent } from '../../molecules/header/header.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const activatedRouteMock = {
    paramMap: of({ get: () => '1' }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        GridCocktailsComponent,
        LayoutComponent,
        HeaderComponent,
      ],
      imports: [HttpClientTestingModule, RouterModule],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
