import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {User} from '../../_model/user';
import {UserService} from './user.service';
import {Observable} from 'rxjs';

@Injectable()
export class UserResolverService implements Resolve<User[]> {

  constructor(private userService: UserService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.userService.getUsers();
  }
}
