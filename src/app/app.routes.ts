import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPage} from './dashboard/dashboard.page';
import {MainLayout} from './main/main.layout';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import { ProgressPage } from './progress.page/progress.page.component';
import { CompaniesComponent } from './companies/companies.component';
import { DocumentComponent } from './document/document.component';

const routes: Routes = [
  {
    path: '',
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
      {
        path: 'detail/:assetNo',
        component: AssetDetailPage,
      },

      {
        path: 'progress',
        component: ProgressPage,
      },
      {
        path: 'companies',
        component: CompaniesComponent,
      },
      {
        path: 'documents',
        component: DocumentComponent,
      },

    ],
  },
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
