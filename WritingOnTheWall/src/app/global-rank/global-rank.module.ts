import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalRankRoutingModule } from './global-rank-routing.module';
import { GlobalRankRootComponent } from './global-rank-root/global-rank-root.component';


@NgModule({
  declarations: [GlobalRankRootComponent],
  imports: [
    CommonModule,
    GlobalRankRoutingModule
  ]
})
export class GlobalRankModule { }
