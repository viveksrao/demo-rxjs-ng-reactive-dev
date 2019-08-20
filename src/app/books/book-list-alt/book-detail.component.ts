import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BookService } from '../book.service';
import { EMPTY, Subject, combineLatest } from 'rxjs';
import { catchError, map, filter } from 'rxjs/operators';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailComponent implements OnInit {

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  book$ = this.bookService.selectedBook$
  .pipe(
    catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );

  pageTitle$ = this.book$
    .pipe(
      map((b: Book) => 
      b ? `Book Detail for: ${b.bookName}` : null)
    );

  bookPublishers$ = this.bookService.selectedBookPublishers$
  .pipe(
    catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );

  vm$ = combineLatest([
    this.book$,
    this.bookPublishers$,
    this.pageTitle$
  ])
  .pipe(
    filter(([book]) => Boolean(book)),
    map(([book, bookPublishers, pageTitle]) => 
    ({ book, bookPublishers, pageTitle }))
  );


  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

}
