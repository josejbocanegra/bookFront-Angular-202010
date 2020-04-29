import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookRoutingModule } from './book-routing.module';
import { BookListarComponent } from './book-listar/book-listar.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookReviewsComponent } from './book-reviews/book-reviews.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookRoutingModule,
  ],
  declarations: [BookListarComponent, BookDetailComponent, BookCreateComponent, BookReviewsComponent],
  exports: [BookListarComponent],
})
export class BookModule { }
