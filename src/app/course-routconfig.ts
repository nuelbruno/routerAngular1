import { CanDeactivateDetail } from './detailview/canDeactivateDetail';
import { Component } from '@angular/core';
import { routeConfig } from './route-config';
import { CourselistComponent } from './courselist/courselist.component';
import { DetailviewComponent } from './detailview/detailview.component';

export const courceRoute: routeConfig = [
  {
    path: 'courses',
    children: [
      {
        path: '',
        component: CourselistComponent
      },
      {
        path: ':id',
        component: DetailviewComponent,
        canDeactivate: [CanDeactivateDetail]
      }
    ]
  }
];
