import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';



import {Injectable} from "@angular/core";

@Injectable()


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'm18';
  products : any = [];
  constructor(private httpclient : HttpClient) {
  }
  ngOnInit() {
    this.httpclient.get('./assets/catalog.json').subscribe(
      data => {
        this.products = data as any[];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
