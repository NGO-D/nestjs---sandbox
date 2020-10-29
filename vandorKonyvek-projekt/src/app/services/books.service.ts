import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { Books } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
 // books: Array<Books>;
 // maxBookID: Number;

  constructor(private httpClient: HttpClient) { }
  books: Array<Books>;
  bookSignupForm: FormGroup;
  maxID: Number;

  createBookNewSignupForm() {
    return this.bookSignupForm = new FormGroup( {
      'bo_author': new FormControl(null),
      'bo_title': new FormControl(null),
      'bo_image': new FormControl(null),
      'bo_available': new FormControl(null),
      'id': new FormControl(null)
    } )
  } 

  maxIDFinder() {
    console.log(this.books);
    this.maxID = this.books.reduce((max, element) => (element.id > max ? element.id : max),
          this.books[0].id) + 1;
    console.log(this.maxID);
    return this.maxID;
    }
  

   // list: BehaviorSubject<any> = new BehaviorSubject([]);
   url: string = 'http://localhost:3000/api/books';

   get(): Observable<any> {
     return this.httpClient.get(this.url);
   }

   //POST
   createNew(books: Books): Observable<any> {
     return this.httpClient.post(`${this.url}/${'new'}`, books);
   }

   //PUT
   update(books: Books): Observable<any> {
     return this.httpClient.put(`${this.url}/${books.id}`, books);
   }

   delete(book: any): Observable<Books> {
      return this.httpClient.delete<Books>(`${this.url}/${book.id}`);
  }

}

