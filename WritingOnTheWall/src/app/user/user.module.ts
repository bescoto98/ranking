import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRootComponent } from './user-root/user-root.component';

import { NavbarModule } from '@navbar/navbar.module';


@NgModule({
  declarations: [UserProfileComponent, UserRootComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NavbarModule
  ]
})
export class UserModule { }
