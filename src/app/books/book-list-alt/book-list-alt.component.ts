import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { BookService } from '../book.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-book-list-alt',
  templateUrl: './book-list-alt.component.html',
  styleUrls: ['./book-list-alt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListAltComponent {

  pageTitle = 'Books';
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  books$ = this.bookService.booksWithCategory$
  .pipe(
    catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );

  selectedBook$ = this.bookService.selectedBook$;

  constructor(private bookService: BookService) { }
  
  onSelected(bookId: number): void{
    this.bookService.selectedBookChanged(bookId);
  }

}
