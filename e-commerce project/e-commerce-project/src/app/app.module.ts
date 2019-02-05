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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CarComponent,
    DisplayComponent,
    SingledisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
