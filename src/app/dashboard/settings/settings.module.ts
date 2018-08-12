import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';

const appRoutes: Routes =[
  { path:'settings', component:DashboardComponent, children:[
    {path:'', component: SettingsComponent, outlet:'dashboardOutlet'}
  ]}
]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
