import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { MaterialModule } from '../shared/material/material.module';
import { TripplannerModule } from './tripplanner/tripplanner.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ContactModule,
    AboutModule,
    TripplannerModule,
    LoginModule,
    HomeModule
    
  ],
  declarations: [
    WebComponent,
    SignupComponent,
    MainNavComponent,
    LoginComponent
  ]
})
export class WebModule { }
