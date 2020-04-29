import { Book } from '../book/book';

import { Author } from './author';

export class AuthorDetail extends Author {

  /**
   * Los libros del author
   */
  private booksA: Book[];
  constructor( books?: Book[]) {
    super();
    this.booksA = books;
  }

  get books(): Book[] {return this.booksA; }
}
