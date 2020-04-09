import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Author } from '../author';
import { AuthorDetail } from '../author-detail';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  /**
   * Constructor for the component
   * @param authorService The author's services provider
   * @param toastrService The toastr to show messages to the user
   */
  constructor(private authorService: AuthorService, private toastr: ToastrService) { }


  authors: Array<AuthorDetail>;
  selectedAuthor: AuthorDetail;
  selected = false;

  getAuthors(): void {
    this.authorService.getAuthors()
      .subscribe(authors => this.authors = authors);
  }

  onSelected(a: AuthorDetail): void {
    console.log(`se seleccionó el autor  ${a.id}`);
    this.selected = true;
    this.selectedAuthor = a;
  }

  ngOnInit() {
    this.getAuthors();
  }

}

