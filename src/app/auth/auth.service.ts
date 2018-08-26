import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginStatus: boolean= false;

  constructor() { }

  loginUser(){
    //login user in backend;
  this.loginStatus = true;

  }
  
  logoutUser(){
    //logoutUser from backend
    this.loginStatus = false;
  }

  getLoginStatus(){
    return this.loginStatus;   
  }
}
