import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {MainLayout} from './main/main.layout';
import {AssetService} from '../services/asset.service';
import {DashboardPage} from './main/dashboard/dashboard.page';
import {FormsModule} from '@angular/forms';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { FriendsModule } from 'app/friends/friends.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CrudService } from '../services/crud.service';
import { KitchenService } from '../services/kitchen.service';
import { PortDialog } from './main/dashboard/port-dialog/port.dialog';
import { RecipeDialog } from 'app/main/dashboard/recipe-dialog/recipe.dialog';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    MainLayout,
    PortDialog,
    RecipeDialog
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    FriendsModule,
  ],
  exports : [
  ],
  providers: [AssetService, KitchenService],
  entryComponents: [PortDialog, RecipeDialog],
  bootstrap: [AppComponent],
})
export class AppModule {
}
