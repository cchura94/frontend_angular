import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosDetalleComponent } from './components/productos-detalle/productos-detalle.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent
  },
  {
    path: ':id',
    component: ProductosDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
