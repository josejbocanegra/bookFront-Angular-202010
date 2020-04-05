import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-listar',
  templateUrl: './book-listar.component.html',
  styleUrls: ['./book-listar.component.css']
})
export class BookListarComponent implements OnInit {
  constructor(private bookService: BookService) { }

  books: Array<Book>;
  selectedBook: Book;
  selected = false;

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => {
        this.books = books;
      });
  }

  onSelected(b: Book): void {
    console.log(`se seleccionó el libro con id ${b.id}`);
    this.selected = true;
    this.selectedBook = b;
  }

  ngOnInit() {
    this.getBooks();
  }

}
