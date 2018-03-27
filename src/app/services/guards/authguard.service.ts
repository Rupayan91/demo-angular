import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class AuthGuardService implements CanActivate {

    // check whether it is activated or not
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        //return this.permissions.canActivate(this.currentUser, route.params.id);
        return true;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        //return this.permissions.canActivate(this.currentUser, route.params.id);
        return false;
    }
}
