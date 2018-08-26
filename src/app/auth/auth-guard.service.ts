import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authService: AuthService,private router:Router) { }

  
  canActivate(){
    console.log(this.authService.getLoginStatus());
    if(this.authService.getLoginStatus()){
      return true;
    }else{
      this.router.navigate(['/please-login']);
    }
  }
}
