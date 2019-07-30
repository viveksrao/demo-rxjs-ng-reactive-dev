import { Component, OnInit } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';

import { Book } from '../book';
import { BookService } from '../book.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  pageTitle = 'Book List';
  errorMessage = '';
  categories;

  books$: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks()
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    )
  }

  onAdd(): void{
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void{
    console.log('Not yet implemented');
  }

}
