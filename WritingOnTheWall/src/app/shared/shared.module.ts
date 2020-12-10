import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListViewComponent } from './list-view/list-view.component';
import { RankingViewComponent } from './ranking-view/ranking-view.component';


@NgModule({
  declarations: [ListViewComponent, RankingViewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListViewComponent, RankingViewComponent
  ]
})
export class SharedModule { }
