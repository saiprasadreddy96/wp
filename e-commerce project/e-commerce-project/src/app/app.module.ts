import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { DisplayComponent } from './display/display.component';
import { SingledisplayComponent } from './singledisplay/singledisplay.component';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchitemsComponent } from './searchitems/searchitems.component';
import {FormsModule, FormGroup} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CarComponent,
    DisplayComponent,
    SingledisplayComponent,
    ShopcartComponent,
    SearchitemsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'display',
        component: DisplayComponent
      },
      {
        path:'singledisplay/:id',
        component: SingledisplayComponent
      }, 
      {
        path:'shopcart',
        component: ShopcartComponent
      },
      {
        path:'searchitems/:search',
        component: SearchitemsComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
