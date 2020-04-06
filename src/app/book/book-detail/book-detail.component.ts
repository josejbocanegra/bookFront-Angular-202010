import { Component, OnInit, Input } from '@angular/core';
import { BookDetail } from '../bookDetail';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() bookDetail: BookDetail;

  constructor() { }

  ngOnInit() {
    console.log(this.bookDetail.id);
  }

  strToDate(publishingdate: string): Date {
    console.log(publishingdate);
    const dateNoTime: string[] = publishingdate.split('T');
    return new Date(dateNoTime[0]);
  }
}
