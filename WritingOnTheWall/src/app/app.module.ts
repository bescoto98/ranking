import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavbarModule } from './navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { ListViewComponent } from './shared/list-view/list-view.component';
import { RankingViewComponent } from './shared/ranking-view/ranking-view.component';
import { GlobalListModule } from './global-list/global-list.module';
import { GlobalRankModule } from './global-rank/global-rank.module';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    RankingViewComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    NgbModule,
    HomeModule,
    AppRoutingModule,
    UserModule,
    GlobalListModule,
    GlobalRankModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
