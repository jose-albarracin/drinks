import { TestBed } from '@angular/core/testing';

import { CocktailsApiService } from './cocktails-api.service';

describe('CocktailsApiService', () => {
  let service: CocktailsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
