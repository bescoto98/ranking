import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

import { NavbarModule } from '@navbar/navbar.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeRootComponent } from './home-root/home-root.component';


@NgModule({
  declarations: [HomePageComponent, RegisterComponent, LoginComponent, HomeRootComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule
  ]
})
export class HomeModule { }
