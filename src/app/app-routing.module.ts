import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserResolverService } from './_services/resolvers/users.resolver';
import { AddUserComponent } from './add-user/add-user.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    resolve: {
      users: UserResolverService
    }
  },
  {
    path: 'add',
    component: AddUserComponent
  },
  {
    path: 'results',
    component: ResultsComponent,
    // resolve: {
    //   users: UserResolverService
    // }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
