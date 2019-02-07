import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../catalog';
import { DataService } from '../data.service';
import { send } from 'q';
@Component({
  selector: 'app-singledisplay',
  templateUrl: './singledisplay.component.html',
  styleUrls: ['./singledisplay.component.css']
})
export class SingledisplayComponent implements OnInit {
  product;
  product1;
  i:any;
  j:number;
  namelist: number[] = [];
  addcart: string[] = [];
  constructor(private ds:DataService,
    private route:ActivatedRoute ) {

    }
    
  ngOnInit() {
    this.i = this.route.snapshot.paramMap.get('id');
    console.log(this.i);
    this.product = this.ds.getbook(this.i);
    this.product1 = this.product.averageRating;
    console.log(this.product);
    console.log(this.product.id);
    for (let j = 0; j < this.product1; j++) {
     this.namelist.push(j);

    }
    
  }
  send() {
    alert("Item added to cart");
    this.ds.getlist(this.i);
  }
  



}
