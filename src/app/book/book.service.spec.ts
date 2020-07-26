/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { BookService } from "./book.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import faker from "faker";
import { environment } from "../../environments/environment";
import { Book } from "./book";

describe("Service: Book", () => {
  let injector: TestBed;
  let service: BookService;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + "books";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService],
    });

    injector = getTestBed();
    service = injector.get(BookService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("getBooks() should return 10 books", () => {
    let mockBooks: Book[] = [];

    for (let i = 0; i < 10; i++) {
      let book = new Book(
        i,
        faker.random.words(),
        faker.random.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.date.past()
      );
      mockBooks.push(book);
    }

    service.getBooks().subscribe((books) => {
      expect(books.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");

    req.flush(mockBooks);
  });

  it("getBookDetail() should return book detail", () => {
    let mockBook = new Book(
      1,
      faker.random.words(),
      faker.random.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.date.past()
    );

    service.getBookDetail(1).subscribe((book) => {
      expect(book.name).toBe(mockBook.name);
      expect(book.isbn).toBe(mockBook.isbn);
      expect(book.publishingdate).toBe(mockBook.publishingdate);
      expect(book.image).toBe(mockBook.image);
      expect(book.description).toBe(mockBook.description);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe("GET");

    req.flush(mockBook);
  });

  it("createBookD() should create a book", () => {
    let mockBook = new Book(
      1,
      faker.random.words(),
      faker.random.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.date.past()
    );

    service.createBookD(mockBook).subscribe((book) => {
      expect(book.name).toBe(mockBook.name);
      expect(book.isbn).toBe(mockBook.isbn);
      expect(book.publishingdate).toBe(mockBook.publishingdate);
      expect(book.image).toBe(mockBook.image);
      expect(book.description).toBe(mockBook.description);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("POST");

    req.flush(mockBook);
  });
});
