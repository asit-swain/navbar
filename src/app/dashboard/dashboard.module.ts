import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DbnavbarComponent } from './dbnavbar/dbnavbar.component';
import { RouterModule } from '@angular/router';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
import { MaterialModule } from '../shared/material/material.module';
import { ProfilenavbarComponent } from './profilenavbar/profilenavbar.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    
    SettingsModule,
    ProfileModule,
  ],
  declarations: [
    DashboardComponent, 
    DbnavbarComponent,
    ProfilenavbarComponent,
  ]
})
export class DashboardModule { }
