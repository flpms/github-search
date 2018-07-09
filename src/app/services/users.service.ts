import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UsersService {

  private host:string = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  public getUser(user:string) {
    return this.http.get(`${this.host}/users/${user}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    }).pipe(
      tap((result) => { console.log(result) }),
      catchError(this.handleError('getUser'))
    );
  }

  public getRepos(user:string) {
    return this.http.get(`${this.host}/users/${user}/repos`, {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    }).pipe(
      tap(() => {}),
      catchError(this.handleError('getRepos'))
    );
  }
}