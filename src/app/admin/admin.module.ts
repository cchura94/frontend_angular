import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth.interceptor';
import { FormCategoriaComponent } from './components/categoria/form-categoria/form-categoria.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NavComponent, DashboardComponent, CategoriaComponent, ProductoComponent, FormCategoriaComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AdminModule { }
