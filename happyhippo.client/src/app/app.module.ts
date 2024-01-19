import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuoteCatalogComponent } from './components/quote-catalog/quote-catalog.component';
import { BookCatalogComponent } from './components/book-catalog/book-catalog.component';
import { BookComponent } from './components/book/book.component';
import { QuoteComponent } from './components/quote/quote.component';
import { SiteNavigationComponent } from './components/site-navigation/site-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuoteCatalogComponent,
    BookCatalogComponent,
    BookComponent,
    QuoteComponent,
    SiteNavigationComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
