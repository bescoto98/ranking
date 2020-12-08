import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalListRoutingModule } from './global-list-routing.module';
import { GlobalListRootComponent } from './global-list-root/global-list-root.component';


@NgModule({
  declarations: [GlobalListRootComponent],
  imports: [
    CommonModule,
    GlobalListRoutingModule
  ]
})
export class GlobalListModule { }
