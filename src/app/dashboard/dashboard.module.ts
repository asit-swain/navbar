import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DbnavbarComponent } from './dbnavbar/dbnavbar.component';
import { RouterModule } from '@angular/router';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SettingsModule,
    ProfileModule,
  ],
  declarations: [
    DashboardComponent, 
    DbnavbarComponent
  ]
})
export class DashboardModule { }
