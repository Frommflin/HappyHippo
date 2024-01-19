import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCatalogComponent } from './components/book-catalog/book-catalog.component';
import { HomeComponent } from './components/home/home.component';
import { QuoteCatalogComponent } from './components/quote-catalog/quote-catalog.component';
import { RegisterComponent } from './components/register/register.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Happy Hippo' },
  { path: 'books', component: BookCatalogComponent, title: 'Happy Hippo´s Books' },
  { path: 'quotes', component: QuoteCatalogComponent, title: 'Happy Hippo´s Quotes' },
  { path: 'signin', component: SignInComponent, title: 'Happy Hippo - Sign In' },
  { path: 'register', component: RegisterComponent, title: 'Happy Hippo - Register' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
