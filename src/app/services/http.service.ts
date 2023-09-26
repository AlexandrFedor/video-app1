import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public keyupSubject = new Subject<KeyboardEvent>()
  constructor(private http: HttpClient) { }

  getMovies(search: string): Observable<any> {
     return this.http.get<any>(environment.endpoint + search)
  }
}
