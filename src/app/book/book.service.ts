import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BookDetail } from './bookDetail';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = environment.baseUrl + 'books';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Array<BookDetail>> {
    console.log(`Url back: ${this.apiUrl}`);
    return this.http.get<Array<BookDetail>>(this.apiUrl);
  }

}
