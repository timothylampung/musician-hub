import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendMainComponent } from './friend-core/friend-main.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavDrawerComponent } from '../nav-drawer/nav-drawer.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    CommonModule,
  ],
  declarations: [
    FriendListComponent,
    FriendMainComponent,
  ]
})
export class FriendsModule { }
