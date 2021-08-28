import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminviewflightsComponent } from '../../modules/adminmod/components/adminviewflights/adminviewflights.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from '../../admindashboard/admindashboard.component';
import { AdminaddflightComponent } from './components/adminaddflight/adminaddflight.component';
import { AdminmanagecouponComponent } from './components/adminmanagecoupon/adminmanagecoupon.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgxPaginationModule} from 'ngx-pagination';
const routes: Routes = [
  // {path:'admin',children:[
  //   {path:'viewflights',component:AdminviewflightsComponent}
  // ]}


]

@NgModule({
  declarations: [
    AdminviewflightsComponent,
    AdmindashboardComponent,
    AdminaddflightComponent,
    AdminmanagecouponComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgxPaginationModule
  ]
})
export class AdminmodModule { }
