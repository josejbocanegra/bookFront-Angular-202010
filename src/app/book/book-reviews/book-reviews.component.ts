import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../review';

@Component({
  selector: 'app-book-reviews',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.css']
})
export class BookReviewsComponent implements OnInit {
  @Input() bookReviews: Review[];


  constructor() { }

  ngOnInit() {
  }

}
