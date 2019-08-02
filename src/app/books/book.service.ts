import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError, tap, map } from "rxjs/operators";

import { Book } from './book';
import { Publisher } from "../publishers/publisher";
import { PublisherService } from '../publishers/publisher.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'api/books';
  private publishersUrl = this.publisherService.publishersUrl;

  books$ = this.http.get<Book[]>(this.booksUrl).pipe(
    // map(item => item.price * 1.5),
    tap(data => console.log('Books: ', JSON.stringify(data))),
    catchError(this.handleError)
  );

  constructor(private http: HttpClient, private publisherService: PublisherService) { }

  private fakeBook(){
    return{
      id: 42,
      bookName:'Another Book',
      bookCode: 'TBX-0042',
      description: 'Our new book',
      price: 8.9,
      categoryId: 3,
      category: 'Data Science',
      quantityInStock: 30
    };
  }

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
