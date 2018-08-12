import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripplannerComponent } from './tripplanner.component';

import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from '../web.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material';
import { MaterialModule } from '../../shared/material/material.module';

const appRoutes: Routes =[
  { path:'tripplaner', component:WebComponent, children:[
    {path:'', component: TripplannerComponent, outlet:'webOutlet'}
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,    
    
  ],
  declarations: [TripplannerComponent]
})
export class TripplannerModule { }
