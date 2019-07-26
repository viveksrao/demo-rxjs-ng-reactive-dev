import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../book';
import { BookService } from '../book.service';

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
    this.books$ = this.bookService.getBooks();
  }

  onAdd(): void{
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void{
    console.log('Not yet implemented');
  }

}
