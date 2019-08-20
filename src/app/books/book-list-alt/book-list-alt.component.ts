import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EMPTY, Subject, combineLatest } from 'rxjs';
import { BookService } from '../book.service';
import { catchError, map } from 'rxjs/operators';
import { Book } from '../book';

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

  // Books with their categories
  books$ = this.bookService.booksWithCategory$
  .pipe(
    catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );

  // Selected Book to highlight the entry
  selectedBook$ = this.bookService.selectedBook$;

  // Combine all streams for the view
  vm$ = combineLatest([
    this.books$,
    this.selectedBook$
  ])
  .pipe(
    map(([books, book]: [Book[], Book]) => 
    ({ books, bookId: book ? book.id : 0 }))
  );

  constructor(private bookService: BookService) { }
  
  onSelected(bookId: number): void{
    this.bookService.selectedBookChanged(bookId);
  }

}
