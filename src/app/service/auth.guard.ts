import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {state} from '@angular/animations';
import {Observable} from "rxjs";


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  list: any;

  constructor(
    router: Router,
    protected authenticationService: AuthenticationService
  ) {
  }

  // tslint:disable-next-line:no-shadowed-variable
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.getCurrentUserValue();
    if (currentUser.authenticated) {
      let set = new Set();
      currentUser.authorities.forEach((authority: any) => {
        set.add(authority.authority);
      });
      route.data.roles.valueOf().forEach(role => {
        set.add(role);
      });
      console.log(set);
      if (set.size < currentUser.authorities.length + route.data.roles.length) {
        return true;
      }
    }
  }
}


// not logged in so redirect to login page with the return url
// this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
// return false;
// }
// }
