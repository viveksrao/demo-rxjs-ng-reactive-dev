import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BookService } from '../book.service';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailComponent implements OnInit {

  pageTitle = 'Book Detail';
  errorMessage = '';

  book$ = this.bookService.selectedBook$
  .pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

}
