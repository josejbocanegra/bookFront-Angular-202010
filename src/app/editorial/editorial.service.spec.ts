/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { EditorialService } from "./editorial.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import faker from "faker";
import { environment } from "../../environments/environment";
import { Editorial } from "./editorial";

describe("Service: Editorial", () => {
  let injector: TestBed;
  let service: EditorialService;
  let httpMock: HttpTestingController;

  let apiUrl = environment.baseUrl + "editorials";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EditorialService],
    });

    injector = getTestBed();
    service = injector.get(EditorialService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("getEditorial() should return 10 editorial", () => {
    let mockEditorials: Editorial[] = [];

    for (let i = 0; i < 10; i++) {
      let editorial = new Editorial(i, faker.random.words());
      mockEditorials.push(editorial);
    }

    service.getEditorials().subscribe((editorials) => {
      expect(editorials.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");

    req.flush(mockEditorials);
  });

  it("createEditorial() should return created editorial", () => {
    let mockEditorial: Editorial = new Editorial(1, faker.random.words());

    service.createEditorial(mockEditorial).subscribe((editorial) => {
      expect(editorial.id).toBe(mockEditorial.id);
      expect(editorial.name).toBe(mockEditorial.name);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("POST");

    req.flush(mockEditorial);
  });
});
