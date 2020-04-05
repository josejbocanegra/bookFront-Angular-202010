import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() bookDetail: Book;

  constructor() { }

  ngOnInit() {
    setTimeout(() => console.log(this.bookDetail.id));
  }

  strToDate(publishingdate: string): Date {
    console.log(publishingdate);
    const dateNoTime: string[] = publishingdate.split('T');
    return new Date(dateNoTime[0]);
  }

}
