import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';




@NgModule({
  declarations: [NavComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    
  ]
})
export class AdminModule { }
