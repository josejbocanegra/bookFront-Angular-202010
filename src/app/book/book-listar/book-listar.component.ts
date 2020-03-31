import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
@Component({
  selector: 'app-book-listar',
  templateUrl: './book-listar.component.html',
  styleUrls: ['./book-listar.component.css']
})
export class BookListarComponent implements OnInit {
  constructor() { }
  private books: Array<Book>;
  ngOnInit() {
  }

}
