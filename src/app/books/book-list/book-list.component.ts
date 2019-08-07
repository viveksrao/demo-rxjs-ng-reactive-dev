import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EMPTY, Subject, combineLatest } from 'rxjs';
import { BookService } from '../book.service';
import { catchError, map } from 'rxjs/operators';
import { BookCategoryService } from 'src/app/book-categories/book-category.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {

  pageTitle = 'Book List';
  errorMessage = '';

  private categorySelectedSubject = new Subject<number>();
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  books$ = combineLatest([
    this.bookService.booksWithCategory$,
    this.categorySelectedAction$
  ]) 
  .pipe(
    map(([books, selectedCategoryId]) =>
      books.filter(book => 
        selectedCategoryId ? book.categoryId === selectedCategoryId : true
    )),
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  categories$ = this.bookCategoryService.bookCategories$
  .pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  constructor(private bookService: BookService, private bookCategoryService: BookCategoryService) { }

  onAdd(): void{
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void{
    this.categorySelectedSubject.next(+categoryId);
  }

}
