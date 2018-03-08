import { courceRoute } from './course-routconfig';
import { DetailviewComponent } from './detailview/detailview.component';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { CourselistComponent } from './courselist/courselist.component';
import { HomeComponent } from './home/home.component';
import { Route } from '@angular/router/src/config';
import { LessonsComponent } from './lessons/lessons.component';

const indexRout: Route = {
  path: '',
  component: HomeComponent
};
const fallbackRout: Route = {
  path: '**',
  component: HomeComponent
};

export const routeConfig = [

  ...courceRoute,
  {
    path: 'lesson',
    component: LessonsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  indexRout,
  fallbackRout
];
