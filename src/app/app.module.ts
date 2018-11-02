import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {UserResolverService} from './_services/resolvers/users.resolver';
import {HttpBackendInter } from './http-backend-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    HttpBackendInter,
    UserResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
