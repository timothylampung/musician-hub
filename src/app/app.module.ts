import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {MainLayout} from './main/main.layout';
import {AssetService} from '../services/asset.service';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import {DashboardPage} from './dashboard/dashboard.page';
import {AssetCreatorDialog} from './dashboard/asset-creator.dialog';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import { ProgressPage } from './progress.page/progress.page.component';
import { CompaniesComponent } from './companies/companies.component';
import { DocumentComponent } from './document/document.component';
import { ProgressDialogComponent } from './progress.page/progress.dialog/progress.dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    AssetDetailPage,
    AssetCreatorDialog,
    MainLayout,
    ProgressPage,
    CompaniesComponent,
    DocumentComponent,
    ProgressDialogComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AssetService],
  entryComponents: [AssetCreatorDialog,ProgressDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
