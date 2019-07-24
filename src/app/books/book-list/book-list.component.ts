import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  pageTitle = 'Book List';
  errorMessage = '';
  categories;

  books: Book[] = [];
  sub: Subscription;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.sub = this.bookService.getBooks().subscribe(
      books => this.books = books,
      error => this.errorMessage = error
    );
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  onAdd(): void{
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void{
    console.log('Not yet implemented');
  }

}
