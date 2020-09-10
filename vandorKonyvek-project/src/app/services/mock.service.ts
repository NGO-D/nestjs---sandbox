import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Mock } from '../models/mock.model';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private httpClient: HttpClient) { }

   // list: BehaviorSubject<any> = new BehaviorSubject([]);
   url: string = 'http://localhost:3000/api/mock';

   getAll(): Observable<any> {
     return this.httpClient.get(this.url);
   }

   getOne(id: number): Observable<any> {
     return this.httpClient.get(`${this.url}/${id}`);
   }

   createNew(mock: Mock): Observable<any> {
     return this.httpClient.put(`${this.url}`, mock);
   }

   update(mock: Mock): Observable<any> {
     return this.httpClient.post(`${this.url}/${mock.id}`, mock);
   }

}
