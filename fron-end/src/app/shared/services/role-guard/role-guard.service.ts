import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router , CanActivate } from '@angular/router';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public router: Router) { }

  canActivate(activeRoute: ActivatedRouteSnapshot) : boolean {
    const expectedRole = activeRoute.data.expectedRole;
    const token = localStorage.getItem('token');
    const tokenPayload = { role : 'admin'};
    console.log(expectedRole, tokenPayload.role);
    if(tokenPayload.role === expectedRole)
      return true;
    else
      return false;
  }
}
