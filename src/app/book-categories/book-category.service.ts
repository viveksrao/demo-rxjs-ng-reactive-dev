import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

import { BookCategory } from "./book-category";
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookCategoryService {

  private bookCategoriesUrl = 'api/bookCategories';

  bookCategories$ = this.http.get<BookCategory[]>(this.bookCategoriesUrl)
  .pipe(
    tap(data => console.log(`Categories`, JSON.stringify(data))),
    catchError(this.handleError)
  );

  constructor(private http: HttpClient) { }

  private handleError(err: any){
    let errorMessage: string;
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occurred: ${err.error.message}`;
    }else{
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
