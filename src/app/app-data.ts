import { InMemoryDbService } from "angular-in-memory-web-api";

import { BookData } from './books/book-data';
import { BookCategoryData } from './book-categories/book-category-data';
import { PublisherData } from './publishers/publisher-data';

export class AppData implements InMemoryDbService {
  createDb(){
    const books = BookData.books;
    const bookCategories = BookCategoryData.categories;
    const publishers = PublisherData.publishers;
    return { books, bookCategories, publishers };
  }
}
