import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BookService } from '../book.service';
import { EMPTY, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailComponent implements OnInit {

  pageTitle = 'Book Detail';
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  book$ = this.bookService.selectedBook$
  .pipe(
    catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );

  bookPublishers$ = this.bookService.selectedBookPublishers$
  .pipe(
    catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );


  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

}
