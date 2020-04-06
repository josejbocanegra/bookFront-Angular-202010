
import { Book } from './book';
import { Review } from './review';
import { Author } from '../author/author';

export class BookDetail extends Book {

  authors: Array<Author>;
  reviews: Array<Review>;
}
