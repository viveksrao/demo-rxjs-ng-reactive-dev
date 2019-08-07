import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EMPTY } from 'rxjs';
import { BookService } from '../book.service';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {

  pageTitle = 'Book List';
  errorMessage = '';
  categories;
  selectedCategoryId = 1;

  books$ = this.bookService.booksWithCategory$
  .pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  booksSimpleFilter$ = this.bookService.booksWithCategory$
    .pipe(
      map(books => 
        books.filter(book => 
          this.selectedCategoryId ? book.categoryId === this.selectedCategoryId : true
        ))
    );

  constructor(private bookService: BookService) { }

  onAdd(): void{
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void{
    console.log('Not yet implemented');
  }

}
