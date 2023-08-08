import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailsApiService } from 'src/app/services/cocktails-api.service';
@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  cocktail: any = {};
  constructor(
    private cocktailsApi: CocktailsApiService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loadDataCocktail();
  }

  loadDataCocktail(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.cocktailsApi.getCocktailDetail(id).subscribe({
        next: (data) => {
          const { drinks } = data;

          this.cocktail = drinks[0];
          console.log('CocktailCurrent:', this.cocktail);
        },
      });
    });
  }
}
