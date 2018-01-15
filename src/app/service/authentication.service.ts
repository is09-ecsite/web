import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Authentication } from './../struct/authentication';
import { URL } from './URL'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {

  private authentication: Authentication;
  private subscribers = [];

  constructor(private http: HttpClient) { 
    const token = localStorage.getItem("token");
    if(token) {
      const authentication = new Authentication();
      authentication.token = token;
      this.authentication = authentication;
    }
  };

  /** create authentication by gift code. Will 404 if id not found */
  createAuthentication(giftCode: string): Observable<Authentication> {

    // TODO Product Migration
    // remove following debug code and delete comment out production code when a real server is ready to receive requests.
    // debug
    return this.http.get<Authentication>(URL.v1.auth).pipe(
      tap(authentication => {
        this.authentication = authentication;
        localStorage.setItem("token", authentication.token);
        for (let subscribe of this.subscribers)
          subscribe.listener(authentication);
        this.log(`fetched authentication`);
      }),
      catchError(this.handleError<Authentication>(`createAuthentication`))
    );

    // product
    // return this.http.post<Authentication>(URL.v1.auth, {gift_code: giftCode}).pipe(
    //   tap(authentication => {
    //     this.authentication = authentication;
    //     localStorage.setItem("token", "Bearer " + authentication.token);
    //     for (let subscribe of this.subscribers)
    //       subscribe.listener(authentication);
    //     this.log(`fetched authentication`);
    //   }),
    //   catchError(this.handleError<Authentication>(`createAuthentication`))
    // );

  };

  getAuthentication(): Authentication {
    return this.authentication;
  }

  hasAuthentication(): boolean {
    return this.authentication ? true : false;
  }

  setAuthentication(authentication: Authentication) {
    this.authentication = authentication;
  }

  subscribe(listener: (Authentication) => any) : string {
    listener(this.authentication);
    let id = Math.random().toString(36).slice(-10);
    this.subscribers = this.subscribers.concat({listener, id});
    return id;
  }

  unsubscribe(id: string) {
    this.subscribers = this.subscribers.filter(s => s.id != id)
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transform¥ing error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AuthenticationService message with the MessageService */
  private log(message: string) {
    console.log('AuthenticationService: ' + message);
  }
}
