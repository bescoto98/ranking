import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalRankRootComponent } from './global-rank-root/global-rank-root.component';

const routes: Routes = [
  {
    path: 'rankings', component: GlobalRankRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalRankRoutingModule { }
