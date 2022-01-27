import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { EditarProductoComponent } from './components/producto/editar-producto/editar-producto.component';
import { ListaProductoComponent } from './components/producto/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './components/producto/nuevo-producto/nuevo-producto.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'categoria',
        component: CategoriaComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'producto',
        component: ProductoComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: ListaProductoComponent
          },
          {
            path: 'nuevo',
            component: NuevoProductoComponent
          },
          {
            path: ':id/editar',
            component: EditarProductoComponent
          }
        ]
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
