import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Author } from 'src/app/author/author';
import { AuthorService } from 'src/app/author/author.service';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {Observable, Subject, merge} from 'rxjs';
import { Editorial } from 'src/app/editorial/editorial';
import { EditorialService } from 'src/app/editorial/editorial.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BookDetail } from '../bookDetail';


@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {
  bookForm: FormGroup;
  /**
   * The list of  author to be added to book
   */
  authors: Author[];
  /**
   * The list of every author in the BookStore
   */
  allAuthors: Author[];
  /**
   * The list of all the editorials in the BookStore
   */
  editorials: Editorial[];
  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private authorService: AuthorService ,
    private editorialService: EditorialService,
    private toastrService: ToastrService,
    private router: Router,
  ) {
    this.bookForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      authors: ['', [Validators.required]],
      publishingdate: ['', [Validators.required]],
      description: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
      image: ['', [Validators.required]],
      editorial: ['', [Validators.required]],
    });
  }
  /**
   * Creates a new book
   */
  createBook(bookC: BookDetail) {
    const a = this.bookForm.controls.publishingdate.value;
    const dateB: Date = new Date(a);
    bookC.publishingdate = dateB;
    bookC.authors = this.authors;

    this.bookService.createBookD(bookC)
      .subscribe(book => {
        this.toastrService.success('The book was created successfully');
        this.router.navigate(['/book/' + book.id]);

        this.bookForm.reset();
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }
  /**
   * Cancels the creation of the new book
   * Redirects to the books' list page
   */
  cancelCreation(): void {
    this.toastrService.warning('The book wasn\'t created', 'Book creation');
    this.router.navigate(['/book/list']);
    this.bookForm.reset();
  }

  /**
   * Retrieves the list of editorials in the BookStore
   */
  getEditorials(): void {
    this.editorialService.getEditorials()
      .subscribe(editorials => {
        this.editorials = editorials;
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }

/*
     * Retrives the information of all the authores in the aplication.
     */
    getAuthors(): void {
      this.authorService.getAuthors().subscribe(authors => {
          this.allAuthors = authors;

      });
  }






addAuthor(): void {

const aut = this.bookForm.get('authors').value;
for (const auth of this.allAuthors) {
  if (aut === auth.name) {
    this.authors.push(auth);
  }
}


}

removeAuthor(author): void {
  const index = this.authors.indexOf(author);
  this.authors.splice(index, 1);
}

ngOnInit(): void {
 this.getAuthors();
 this.getEditorials();
 this.authors = [];
}

}
