import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { Routes, RouterOutlet, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';

const appRoutes: Routes =[
  { path:'profile', component:DashboardComponent, children:[
    {path:'', component: ProfileComponent, outlet:'dashboardOutlet'}
  ]},
  {path:'**', redirectTo:'profile'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
