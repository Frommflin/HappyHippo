import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuote, IQuoteId } from '../models/quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  getQuotes(user: string): Observable<IQuoteId[]> {
    return this.http.post<IQuoteId[]>('/happyhippoquotes/getquotes/' + user, user);
  }

  addQuote(quote: IQuote): Observable<IQuoteId> {
    return this.http.post<IQuoteId>('/happyhippoquotes/addquote', quote);
  }

  getQuoteById(id: number): Observable<IQuoteId>{
    return this.http.get<IQuoteId>('/happyhippoquotes/getquote/' + id);
  }

  editQuote(id: number, quote: IQuote): Observable<IQuoteId> {
    let quoteToEdit: IQuoteId = {
      id: id,
      quoteText: quote.quoteText,
      author: quote.author,
      userId: quote.userId
    };

    return this.http.put<IQuoteId>('/happyhippoquotes/edit/' + id, quoteToEdit);
  }
}
