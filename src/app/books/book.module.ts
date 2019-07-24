import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { BookShellComponent } from './book-list-alt/book-shell.component';
import { BookListAltComponent } from './book-list-alt/book-list-alt.component';
import { BookDetailComponent } from './book-list-alt/book-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BookListComponent,
    BookShellComponent,
    BookListAltComponent,
    BookDetailComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookListComponent
      },
      {
        path: ':alternate',
        component: BookShellComponent
      }
    ])
  ]
})
export class BookModule { }
