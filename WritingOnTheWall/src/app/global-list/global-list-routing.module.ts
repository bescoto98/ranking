import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalListRootComponent } from './global-list-root/global-list-root.component';

const routes: Routes = [
  {
    path: 'toplists', component: GlobalListRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalListRoutingModule { }
