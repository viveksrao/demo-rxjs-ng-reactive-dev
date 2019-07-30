import { Component } from '@angular/core';
import { EMPTY } from 'rxjs';
import { BookService } from '../book.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-book-list-alt',
  templateUrl: './book-list-alt.component.html',
  styleUrls: ['./book-list-alt.component.css']
})
export class BookListAltComponent {

  pageTitle = 'Books';
  errorMessage = '';
  selectedBookId;

  books$ = this.bookService.books$
  .pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  constructor(private bookService: BookService) { }
  
  onSelected(bookId: number): void{
    console.log('Not yet implemented');
  }

}
