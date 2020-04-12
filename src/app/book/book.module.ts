import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { BookListarComponent } from './book-listar/book-listar.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookReviewsComponent } from './book-reviews/book-reviews.component';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
  ],
  declarations: [BookListarComponent, BookDetailComponent, BookReviewsComponent],
  exports: [BookListarComponent],
})
export class BookModule { }
