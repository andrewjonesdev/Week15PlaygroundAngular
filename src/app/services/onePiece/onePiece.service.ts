import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '@environments/environment';
import { chapter } from '@app/models/chapter';
import { devilFruit } from '@app/models/devilFruit';
import { saga } from '@app/models/saga';

@Injectable({
  providedIn: 'root',
})
export class OnePieceService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-functions-key': environment.apiDefaultKey
    }),
    observe: 'response' as 'body',
    params: new HttpParams({}),
  };

  getChapters(): Observable<chapter[]> {
    let url = environment.apiUrl + '/getchapters';
    return this.http
      .get<chapter[]>(url)
      .pipe(retry(1), catchError(this.handleError))

  }

  getDevilFruits(): Observable<devilFruit[]> {
    let url = environment.apiUrl + '/getdevilfruits';
    return this.http
      .get<devilFruit[]>(url)
      .pipe(retry(1), catchError(this.handleError))

  }

  getSagas(): Observable<saga[]> {
    let url = environment.apiUrl + '/getsagas';
    return this.http
      .get<saga[]>(url)
      .pipe(retry(1), catchError(this.handleError))

  }

  handleError(error: any) {
    let errorMessage = error.statusText;
    return throwError(() => {
      return errorMessage;
    });
  }
}
