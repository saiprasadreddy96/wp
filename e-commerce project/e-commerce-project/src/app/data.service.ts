import { Injectable } from '@angular/core';
import { product } from "./catalog";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  list: string[] = [];
  constructor() {
   }
   get() {
    return this.list;
  }
   getbook(i) {
    return product.items[i];
   }
   getlist(i) {
    this.list.push(product.items[i]);
   }
   delete(index) {
    this.list.splice(index, 1);
  }
}
