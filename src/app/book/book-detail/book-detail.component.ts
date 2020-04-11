import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDetail } from '../bookDetail';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() bookDetail: BookDetail;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {
  }

  bookId: number;
  getBookDetail(): void {
    this.bookService.getBookDetail(this.bookId)
      .subscribe(bookDetail => {
        this.bookDetail = bookDetail;
      });
  }
ngOnInit() {
  if (this.bookDetail === undefined) {
    console.log('routerLink');
    this.bookId = +this.route.snapshot.paramMap.get('id');
    this.getBookDetail();

  } else { console.log(this.bookDetail.id); }
}


  strToDate(publishingdate: string): Date {
    console.log(publishingdate);
    const dateNoTime: string[] = publishingdate.split('T');
    return new Date(dateNoTime[0]);
  }
}
