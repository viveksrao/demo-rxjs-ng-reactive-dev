import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  pageTitle = 'Book Detail';
  errorMessage = '';
  book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

}
