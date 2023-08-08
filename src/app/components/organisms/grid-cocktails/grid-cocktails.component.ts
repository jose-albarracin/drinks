import { Component, OnInit } from '@angular/core';
import { CocktailsApiService } from '../../../services/cocktails-api.service';

@Component({
  selector: 'app-grid-cocktails',
  templateUrl: './grid-cocktails.component.html',
  styleUrls: ['./grid-cocktails.component.scss'],
})
export class GridCocktailsComponent implements OnInit {
  cocktails: any = [];
  constructor(private cocktailsApi: CocktailsApiService) {}

  ngOnInit(): void {
    this.getDataCocktails();
  }

  getDataCocktails() {
    this.cocktailsApi.getFullListDataCocktails().subscribe({
      next: (data) => {
        const { drinks } = data;

        console.log('cocktails:', data);
        this.cocktails = drinks;
      },
    });
  }
}
