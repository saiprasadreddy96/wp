import { Component, OnInit } from '@angular/core';
import { product } from '../catalog';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }
  products = product;
  ngOnInit() {
  }

}
