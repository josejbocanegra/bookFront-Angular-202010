import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {
  bookForm: FormGroup;
  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder
  ) {
    this.bookForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', Validators.required]
    });
  }
  createBook(newBook: Book) {
    // Process checkout data here
    console.warn('Your order has been submitted', newBook);
    this.bookForm.reset();
  }
}
