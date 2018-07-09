import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchBarComponent } from './components/shared/search-bar/search-bar.component';
import { StarsComponent } from './components/shared/stars/stars.component';
import { LogoComponent } from './components/shared/logo/logo.component';
import { ProfileDetailComponent } from './components/shared/profile-detail/profile-detail.component';

import { UsersService } from './services/users.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ProfileComponent,
    SearchBarComponent,
    SearchHeaderComponent,
    StarsComponent,
    ProfileDetailComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
