import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})
export class ShopcartComponent implements OnInit {
  // @Input() cart;
  arr: string[]=[];
  i = 0;
  constructor(private ds:DataService) { 
  this.arr = this.ds.get();
  console.log(this.arr);
  }
  delete(id) {
    this.ds.delete(id);
  }

  ngOnInit() {
  }
 
}
