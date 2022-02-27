import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  productsUrl = "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json";
  productsData: any = [];
  constructor(private http : HttpClient) { }

  //TODO: Get Product by ID
  getProduct(id: number): Observable<any> {

    return this.http.get<any>(this.productsUrl)
    .pipe(
      map(res =>
      res.data.filter (
        //console.log(res.data)
      )),
      catchError(
        this.handleError));
  }

  getProducts(){
    return this.http.get<any>(this.productsUrl)
    .pipe(
      map(res =>{ 
        this.productsData = res.data
        return res.data
      }),
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage))
  }
}