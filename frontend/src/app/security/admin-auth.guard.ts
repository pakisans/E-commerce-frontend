import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private loginService: LoginService,private router: Router) {
 
  }
 
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
 
    const currentUSer = this.loginService.getCurrentUser();
 
    if(currentUSer.role != "ADMIN") {
      this.router.navigate([""])
      return false;
    }
 
    return true;
 
  }
  
}
