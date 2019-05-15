import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './main/dashboard/dashboard.page';
import { MainLayout } from './main/main.layout';
import { FriendMainComponent } from './friends/friend-core/friend-main.component';
import { FriendListComponent } from './friends/friend-list/friend-list.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'food-hub',
    pathMatch: 'full',
  },
  {
    path: 'food-hub',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardPage,
      },
    ],
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
