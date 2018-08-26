import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { WebComponent } from '../web.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes =[
  { path:'login', component:WebComponent, children:[
    {path:'', component: LoginComponent, outlet:'webOutlet'}
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: []
})
export class LoginModule { }
