import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../../molecules/header/header.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  const activatedRouteMock = {
    paramMap: of({ get: () => '1' }),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent, HeaderComponent],
      imports: [RouterModule],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    });
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
