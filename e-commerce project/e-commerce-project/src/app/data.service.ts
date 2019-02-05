import { Injectable } from '@angular/core';
import { product } from "./catalog";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
   }
   getbook(i) {
    return product.items[i];
   }
}
