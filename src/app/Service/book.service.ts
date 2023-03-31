import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookArray:any[]=[
    {
      id:1,
      title:'one',
      author:'one',
      publishDate:'one',
      price:'one'
    },
    {
      id:2,
      title:'two',
      author:'two',
      publishDate:'two',
      price:'two'
    }
  ]
  constructor() { }
getBooks(){
  return this.bookArray;
}
}
