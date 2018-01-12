import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { CartService } from '../service/cart.service';

import { Settlement } from './../struct/settlement';
import { Cart } from './../struct/cart';
import { URL } from './URL';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SettlementService {

  constructor(
    private http: HttpClient,
    private cart: CartService,
  ) { }

  /** GET settlements from the server */
  getSettlements (): Observable<Settlement[]> {
    return this.http.get<Settlement[]>(URL.v1.settlements)
      .pipe(
        tap(settlements => this.log(`fetched settlements`)),
        catchError(this.handleError('getSettlements', []))
      );
  }

  /** GET settlement by id. Return `undefined` when id not found */
  getSettlementNo404<Data>(id: number): Observable<Settlement> {
    const url = `${URL.v1.settlements}/?id=${id}`;
    return this.http.get<Settlement[]>(url)
      .pipe(
        map(settlements => settlements[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} settlement id=${id}`);
        }),
        catchError(this.handleError<Settlement>(`getSettlement id=${id}`))
      );
  }

  /** GET settlement by id. Will 404 if id not found */
  getSettlement(id: number): Observable<Settlement> {
    const url = `${URL.v1.settlements}/${id}`;
    return this.http.get<Settlement>(url).pipe(
      tap(_ => this.log(`fetched settlement id=${id}`)),
      catchError(this.handleError<Settlement>(`getSettlement id=${id}`))
    );
  }

  /* GET settlements whose name contains search term */
  searchSettlements(term: string): Observable<Settlement[]> {
    if (!term.trim()) {
      // if not search term, return empty settlement array.
      return of([]);
    }
    return this.http.get<Settlement[]>(`api/settlements/?name=${term}`).pipe(
      tap(_ => this.log(`found settlements matching "${term}"`)),
      catchError(this.handleError<Settlement[]>('searchSettlements', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new settlement to the server */
  addSettlement (settlement: Settlement): Observable<Settlement> {
    return this.http.post<Settlement>(URL.v1.settlements, settlement, httpOptions).pipe(
      tap((settlement: Settlement) => this.log(`added settlement w/ id=${settlement.id}`)),
      catchError(this.handleError<Settlement>('addSettlement'))
    );
  }

  /** DELETE: delete the settlement from the server */
  deleteSettlement (settlement: Settlement | number): Observable<Settlement> {
    const id = typeof settlement === 'number' ? settlement : settlement.id;
    const url = `${URL.v1.settlements}/${id}`;

    return this.http.delete<Settlement>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted settlement id=${id}`)),
      catchError(this.handleError<Settlement>('deleteSettlement'))
    );
  }

  /** PUT: update the settlement on the server */
  updateSettlement (settlement: Settlement): Observable<any> {
    return this.http.put(URL.v1.settlements, settlement, httpOptions).pipe(
      tap(_ => this.log(`updated settlement id=${settlement.id}`)),
      catchError(this.handleError<any>('updateSettlement'))
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

  /** Log a SettlementService message with the MessageService */
  private log(message: string) {
    console.log('SettlementService: ' + message);
  }

}
