/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditorialService } from './editorial.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Editorial', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EditorialService]
    });
  });

  it('should ...', inject([EditorialService], (service: EditorialService) => {
    expect(service).toBeTruthy();
  }));
});
