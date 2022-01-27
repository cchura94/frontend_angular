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
import { NuevoProductoComponent } from './components/producto/nuevo-producto/nuevo-producto.component';
import { ListaProductoComponent } from './components/producto/lista-producto/lista-producto.component';
import { EditarProductoComponent } from './components/producto/editar-producto/editar-producto.component';


@NgModule({
  declarations: [NavComponent, DashboardComponent, CategoriaComponent, ProductoComponent, FormCategoriaComponent, NuevoProductoComponent, ListaProductoComponent, EditarProductoComponent],
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
