import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule,Routes } from '@angular/router';
import { WebComponent } from '../web.component';

const appRoutes: Routes =[
  { path:'about', component:WebComponent, children:[
    {path:'', component: AboutComponent, outlet:'webOutlet'}
  ]}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
