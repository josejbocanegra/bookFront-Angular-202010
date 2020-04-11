import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorService } from './author.service';



@NgModule({
  declarations: [AuthorListComponent, AuthorDetailComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    AuthorRoutingModule
  ],
  providers: [AuthorService]
})
export class AuthorModule { }
