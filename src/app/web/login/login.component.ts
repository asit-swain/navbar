import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (public authService:AuthService, public route1:Router) { }
  

  ngOnInit() {
  }

  onLogin(){
    this.authService.loginUser();
    this.route1.navigate(['/dashboard']);
  }

}
