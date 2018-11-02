import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserResolverService} from './_services/resolvers/users.resolver';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    resolve: {
      users: UserResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
