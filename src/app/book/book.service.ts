import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = environment.baseUrl + 'books';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Array<Book>> {
    console.log(`Url back: ${this.apiUrl}`);
    return this.http.get<Array<Book>>(this.apiUrl);
  }

}
