import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosDetalleComponent } from './components/productos-detalle/productos-detalle.component';


@NgModule({
  declarations: [
    ProductosComponent,
    ProductosDetalleComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
