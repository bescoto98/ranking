import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalListRootComponent } from './global-list-root/global-list-root.component';
import { GlobalListComponent } from './global-list/global-list.component';

const routes: Routes = [
  {
    path: 'lists', component: GlobalListRootComponent,
    children: [
      { path: '', component: GlobalListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalListRoutingModule { }
