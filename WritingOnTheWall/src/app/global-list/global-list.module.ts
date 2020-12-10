import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalListRoutingModule } from './global-list-routing.module';
import { GlobalListRootComponent } from './global-list-root/global-list-root.component';
import { GlobalListComponent } from './global-list/global-list.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [GlobalListRootComponent, GlobalListComponent],
  imports: [
    CommonModule,
    GlobalListRoutingModule,
    SharedModule
  ]
})
export class GlobalListModule { }
