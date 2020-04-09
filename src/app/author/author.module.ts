import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BookModule } from '../book/book.module';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorService } from './author.service';



@NgModule({
  declarations: [AuthorListComponent, AuthorDetailComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AuthorRoutingModule,
    BookModule
  ],
  providers: [AuthorService],
  exports: [AuthorListComponent]
})
export class AuthorModule { }
