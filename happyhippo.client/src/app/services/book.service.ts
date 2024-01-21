import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBookId } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(user: string): Observable<IBookId[]> {
    
    return this.http.post<IBookId[]>('/happyhippobooks/getbooks/' + user, user);
  }
}
