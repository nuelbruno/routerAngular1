import { CanDeactivateDetail } from './detailview/canDeactivateDetail';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { CourselistComponent } from './courselist/courselist.component';
import { RouterModule } from '@angular/router';
import { routeConfig } from './route-config';
import { HomeComponent } from './home/home.component';
import { LessonsComponent } from './lessons/lessons.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailviewComponent,
    CourselistComponent,
    HomeComponent,
    LessonsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],

  providers: [
    CanDeactivateDetail
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
