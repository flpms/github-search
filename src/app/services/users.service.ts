import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UsersService {

  private host:string = 'https://api.github.com';
  private auth: string = `Basic ${btoa('flpms:d658f3a65273570d7c61c3992151158990eb3560')}`;
  private header: any = {
    Authorization: this.auth,
    Accept: 'application/vnd.github.v3+json'
  }

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  public getUser(user:string) {
    return this.http.get(`${this.host}/users/${user}`, {
      headers: this.header
    }).pipe(
      catchError(this.handleError('getUser'))
    );
  }

  public getRepos(user:string) {
    return this.http.get(`${this.host}/users/${user}/repos`, {
      headers: this.header
    }).pipe(
      catchError(this.handleError('getRepos'))
    );
  }
}
