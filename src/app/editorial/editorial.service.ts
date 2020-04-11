import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { EditorialDetail } from './editorialDetail';


@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  private apiUrl = environment.baseUrl + 'editorials';
  constructor(private http: HttpClient) { }

  getEditorials(): Observable<Array<EditorialDetail>> {
    return this.http.get<Array<EditorialDetail>>(this.apiUrl);
  }

}

