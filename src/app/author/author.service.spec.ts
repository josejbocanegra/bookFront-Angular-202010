import { TestBed, getTestBed } from '@angular/core/testing';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';

import { AuthorService } from './author.service';
import { Author } from './author';

import faker from "faker";
import { environment } from '../../environments/environment';

describe('AuthorService', () => {

  let injector: TestBed;
  let service: AuthorService;
  let httpMock: HttpTestingController;

  let apiUrl = environment.baseUrl + 'authors';

  beforeEach(() => { 
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthorService]
    });

    injector = getTestBed();
    service = injector.get(AuthorService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getAuthors() should return 10 authors', ()=>{
    
    let mockAuthors: Author[] = [];
    
    for(let i = 0; i < 10; i++){
      let author = new Author(i, faker.name.firstName(), faker.date.past(), faker.image.imageUrl(), faker.lorem.sentence())
      mockAuthors.push(author);
    }

    service.getAuthors().subscribe(authors=>{
      expect(authors.length).toBe(10);
    })

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET")

    req.flush(mockAuthors);

  });
});
