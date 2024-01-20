import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: BehaviorSubject<IUser | null>;

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<IUser | null>(null);
  }

  getUser(): Observable<IUser | null> {
    return this.user;
  }

  signIn(credentials: IUser): Observable<IUser> {
    return this.http.post<IUser>('/happyhippouser/login', credentials)
      .pipe(map((response: IUser) => {
        this.user.next(response);
        return response;
      }));
  }

  signOut() {
    this.user.next(null);
  }

  createUser(credentials: IUser): Observable<IUser> {
    return this.http.post<IUser>('/happyhippouser/register', credentials)
      .pipe(map((response: IUser) => {
        this.user.next(response);
        return response;
      }));
  }
}
