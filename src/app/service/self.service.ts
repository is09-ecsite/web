import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthenticationService } from '../service/authentication.service';

import { Self } from './../struct/self';
import { URL } from './URL';


@Injectable()
export class SelfService {

  constructor(
    private authenticationService : AuthenticationService,
    private http                  : HttpClient,
  ) { }

  /** GET self by id. Will 404 if id not found */
  getSelf(): Observable<Self> {
    return this.http.get<Self>(
      URL.v1.self,
      {
        headers: new HttpHeaders().set( 'Content-Type', 'application/json' )
                                  .set( 'Authorization', 'Bearer ' + 'this.authenticationService.getAuthentication().token')
      }
    ).pipe(
      tap(_ => this.log(`fetched self`)),
      catchError(this.handleError<Self>(`getSelf`))
    );
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

  /** Log a SelfService message with the MessageService */
  private log(message: string) {
    console.log('SelfService: ' + message);
  }

}
