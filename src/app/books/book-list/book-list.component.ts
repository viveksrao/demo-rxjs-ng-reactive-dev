import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EMPTY, Subject, combineLatest, BehaviorSubject } from 'rxjs';
import { BookService } from '../book.service';
import { catchError, map, startWith } from 'rxjs/operators';
import { BookCategoryService } from 'src/app/book-categories/book-category.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {

  pageTitle = 'Book List';
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  // Action Stream
  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  // Merge Data Stream with Action Stream
  // To Filter to the selected Category
  books$ = combineLatest([
    this.bookService.booksWithAdd$,
    this.categorySelectedAction$
  ]) 
  .pipe(
    map(([books, selectedCategoryId]) =>
      books.filter(book => 
        selectedCategoryId ? book.categoryId === selectedCategoryId : true
    )),
    catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );

  // Categories for dropdown list
  categories$ = this.bookCategoryService.bookCategories$
  .pipe(
    catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );

  vm$ = combineLatest([
    this.books$,
    this.categories$
  ])
  .pipe(
    map(([books, categories]) => 
      ({ books, categories })
    )
  );

  constructor(private bookService: BookService, private bookCategoryService: BookCategoryService) { }

  onAdd(): void{
    this.bookService.addBook();
  }

  onSelected(categoryId: string): void{
    this.categorySelectedSubject.next(+categoryId);
  }

}
