import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuoteCatalogComponent } from './components/quote-catalog/quote-catalog.component';
import { BookCatalogComponent } from './components/book-catalog/book-catalog.component';
import { BookComponent } from './components/book/book.component';
import { QuoteComponent } from './components/quote/quote.component';
import { SiteNavigationComponent } from './components/site-navigation/site-navigation.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuoteCatalogComponent,
    BookCatalogComponent,
    BookComponent,
    QuoteComponent,
    SiteNavigationComponent,
    SignInComponent,
    RegisterComponent,
    BookFormComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
