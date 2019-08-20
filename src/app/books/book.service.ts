import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError, Observable, combineLatest, BehaviorSubject, Subject, merge } from 'rxjs';
import { catchError, tap, map, scan, shareReplay } from "rxjs/operators";

import { Book } from './book';
import { Publisher } from "../publishers/publisher";
import { PublisherService } from '../publishers/publisher.service';
import { BookCategoryService } from '../book-categories/book-category.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'api/books';
  private publishersUrl = this.publisherService.publishersUrl;

  books$ = this.http.get<Book[]>(this.booksUrl).pipe(
    tap(data => console.log('Books: ', JSON.stringify(data))),
    catchError(this.handleError)
  );

  booksWithCategory$ = combineLatest([
    this.books$,
    this.bookCategoryService.bookCategories$
  ])
  .pipe(
    map(([books, categories]) =>
      books.map(book => ({
        ...book,
        price: book.price * 1.5,
        category: categories.find(
          c => book.categoryId === c.id
        ).name
      }) as Book)
    ),
    shareReplay(1)
  );

  private bookSelectedSubject = new BehaviorSubject<number>(0);
  bookSelectedAction$ = this.bookSelectedSubject.asObservable();

  selectedBook$ = combineLatest([
    this.booksWithCategory$,
    this.bookSelectedAction$
  ])
    .pipe(
      map(([books, selectedBookId]) => 
        books.find(book => book.id === selectedBookId)
      ),
      tap(book => console.log('selectedBook', book)),
      shareReplay(1)
    );

  private bookInsertedSubject = new Subject<Book>();
  bookInsertedAction$ = this.bookInsertedSubject.asObservable();

  booksWithAdd$ = merge(
    this.booksWithCategory$,
    this.bookInsertedAction$
  ).pipe(
    scan((acc: Book[], value: Book) => [...acc, value])
  )

  selectedBookPublishers$ = combineLatest([
    this.selectedBook$,
    this.publisherService.publishers$
  ]).pipe(
    map(([selectedBook, publishers]) => 
      publishers.filter(publisher => selectedBook.publisherIds.includes(publisher.id))
    )
  );

  constructor(private http: HttpClient, private bookCategoryService: BookCategoryService, private publisherService: PublisherService) { }

  selectedBookChanged(selectedBookId: number): void{
    this.bookSelectedSubject.next(selectedBookId);
  }

  addBook(newBook?: Book){
    newBook = newBook || this.fakeBook();
    this.bookInsertedSubject.next(newBook);
  }

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
