import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Routes, RouterModule, Router} from '@angular/router';
import {FormsModule, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages = this.http.get<any[]>('http://localhost:4201/');
  title = 'Shopping Cart';
  search1: any;
  constructor(private http: HttpClient, private router : Router) {}
  search() {
    this.router.navigate(['/searchitems/search1', {search: this.search1}]);
  }
}
