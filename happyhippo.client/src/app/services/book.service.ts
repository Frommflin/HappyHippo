import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook, IBookId } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(user: string): Observable<IBookId[]> {

    return this.http.post<IBookId[]>('/happyhippobooks/getbooks/' + user, user);
  }

  getBookById(id: number): Observable<IBookId>{
    return this.http.get<IBookId>('/happyhippobooks/getbook/' + id);
  }

  addBook(book: IBook): Observable<IBookId> {
    return this.http.post<IBookId>('/happyhippobooks/addbook', book);
  }

  editBook(id: number, book: IBook): Observable<IBookId> {
    let bookToEdit: IBookId = {
      id: id,
      title: book.title,
      author: book.author,
      year: book.year,
      userId: book.userId
    };

    return this.http.put<IBookId>('/happyhippobooks/edit/' + id, bookToEdit);
  }

  deleteBook(id: number): Observable<IBookId> {
    return this.http.delete<IBookId>('/happyhippobooks/delete/' + id);
  }
}
