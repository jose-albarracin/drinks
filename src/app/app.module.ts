import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/molecules/header/header.component';
import { LayoutComponent } from './components/templates/layout/layout.component';
import { CocktailPreviewComponent } from './components/molecules/cocktail-preview/cocktail-preview.component';
import { GridCocktailsComponent } from './components/organisms/grid-cocktails/grid-cocktails.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CocktailDetailsComponent } from './components/pages/cocktail-details/cocktail-details.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    CocktailPreviewComponent,
    GridCocktailsComponent,
    HomeComponent,
    CocktailDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
