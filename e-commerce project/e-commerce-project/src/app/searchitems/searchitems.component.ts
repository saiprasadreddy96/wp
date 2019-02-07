import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-searchitems',
  templateUrl: './searchitems.component.html',
  styleUrls: ['./searchitems.component.css']
})
export class SearchitemsComponent implements OnInit {
  search;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {

    this.search = this.route.snapshot.paramMap.get('search');
  }

}
