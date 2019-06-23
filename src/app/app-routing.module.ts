import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs/home', pathMatch: 'full' },
  { path: 'tabs', redirectTo: 'tabs/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'catalogue', loadChildren: './catalogue/catalogue.module#CataloguePageModule' },
  { path: 'publish', loadChildren: './publish/publish.module#PublishPageModule' },
  { path: 'message', loadChildren: './message/message.module#MessagePageModule' },
  { path: 'my-self', loadChildren: './my-self/my-self.module#MySelfPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'interested', loadChildren: './interested/interested.module#InterestedPageModule' },
  { path: 'recommend', loadChildren: './recommend/recommend.module#RecommendPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
