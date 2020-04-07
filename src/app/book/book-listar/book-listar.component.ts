import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { BookDetail } from '../bookDetail';

@Component({
  selector: 'app-book-listar',
  templateUrl: './book-listar.component.html',
  styleUrls: ['./book-listar.component.css']
})
export class BookListarComponent implements OnInit {
  constructor(private bookService: BookService) { }

  books: Array<BookDetail>;
  selectedBook: BookDetail;
  selected = false;

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  onSelected(b: BookDetail): void {
    console.log(`se seleccionó el libro  ${b.id}`);
    this.selected = true;
    this.selectedBook = b;
  }

  ngOnInit() {
    this.getBooks();
  }

}
