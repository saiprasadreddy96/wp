import { Component, OnInit } from '@angular/core';
import { product } from '../catalog';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }
  products = product;
  ngOnInit() {
  }

}
