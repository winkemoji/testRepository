import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [{
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'publish',
        children: [{
            path: '',
            loadChildren: '../publish/publish.module#PublishPageModule'
          }
        ]
      }
      // ,
      // {
      //   path: 'catalogue',
      //   children: [{
      //       path: '',
      //       loadChildren: '../catalogue/catalogue.module#CataloguePageModule'
      //     }
      //   ]
      // }
      ,
      {
        path: 'my-self',
        children: [{
            path: '',
            loadChildren: '../my-self/my-self.module#MySelfPageModule'
          }
        ]
      },
      {
        path: 'interested',
        children: [{
            path: '',
            loadChildren: '../interested/interested.module#InterestedPageModule'
          }
        ]
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
  declarations: [TabsPage]
})
export class TabsPageModule {}
