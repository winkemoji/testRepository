import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'recommend',
        children: [{
          path: '',
          loadChildren: '../recommend/recommend.module#RecommendPageModule'
        }]
      }, {
        path: 'interested',
        children: [{
          path: '',
          loadChildren: '../interested/interested.module#InterestedPageModule'
        }]
      }, {
        path: 'search',
        children: [{
          path: '',
          loadChildren: '../search/search.module#SearchPageModule'
        }]
      }, {
        path: 'message',
        children: [{
          path: '',
          loadChildren: '../message/message.module#MessagePageModule'
        }]
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
