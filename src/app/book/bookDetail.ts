import { Editorial } from '../editorial/editorial';
import { Author } from '../author/author';
import { Review } from './review';
import { Book } from './book';

export class BookDetail extends Book  {

  authorsA: Array<Author>;
  reviewsA: Array<Review>;


  constructor(authors?: Array<Author>, reviews?: Array<Review>) {
   super();
   this.authorsA = authors;
   this.reviewsA = reviews;
  }


  get authors(): Array<Author> { return this.authorsA; }
  set authors(pAut) { this.authorsA = pAut; }

  get reviews(): Array<Review> { return this.reviewsA; }
  set reviews(pRev) { this.reviewsA = pRev; }






}



