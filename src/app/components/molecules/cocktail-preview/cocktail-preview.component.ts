import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cocktail-preview',
  templateUrl: './cocktail-preview.component.html',
  styleUrls: ['./cocktail-preview.component.scss'],
})
export class CocktailPreviewComponent {
  @Input() image: string = '';
  @Input() name: string = 'nameless';
}
