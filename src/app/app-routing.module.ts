import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'not-found/:search', component: NotFoundComponent },
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'search', component: SearchHeaderComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
