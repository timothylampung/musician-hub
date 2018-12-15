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

export const firebaseConfig= {
  apiKey: "AIzaSyB1GMuRr7xm0xxebfX6s5EXdIIsqt5nJyI",
  authDomain: "financemanager-72e9c.firebaseapp.com",
  databaseURL: "https://financemanager-72e9c.firebaseio.com",
  projectId: "financemanager-72e9c",
  storageBucket: "financemanager-72e9c.appspot.com",
  messagingSenderId: "614962706114"
}


@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    MainLayout,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    FriendsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  exports : [
  ],
  providers: [AssetService, CrudService],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
