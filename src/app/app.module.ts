import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from "./shared/material/material.module";
import { LayoutModule } from '@angular/cdk/layout';
import { ProfilenavbarComponent } from './profilenavbar/profilenavbar.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

const appRoutes: Routes =[
  {path:'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule'},
  { path: '', loadChildren: './web/web.module#WebModule'} 
]

@NgModule({
  declarations: [
    AppComponent,
    ProfilenavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
