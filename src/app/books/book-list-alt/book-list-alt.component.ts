import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list-alt',
  templateUrl: './book-list-alt.component.html',
  styleUrls: ['./book-list-alt.component.css']
})
export class BookListAltComponent implements OnInit, OnDestroy {

  pageTitle = 'Books';
  errorMessage = '';
  selectedBookId;

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
  
  onSelected(bookId: number): void{
    console.log('Not yet implemented');
  }

}
