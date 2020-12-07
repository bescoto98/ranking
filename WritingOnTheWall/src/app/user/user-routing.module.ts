import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRootComponent } from './user-root/user-root.component';

const routes: Routes = [
  {
    path: 'user', component: UserRootComponent,
    children:
    [
      { path: ':username', component: UserProfileComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
