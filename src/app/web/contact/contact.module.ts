import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from '../web.component';

const appRoutes: Routes =[
  { path:"contact", component:WebComponent, children:[
    {path:'', component: ContactComponent, outlet:'webOutlet'}
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)

  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
