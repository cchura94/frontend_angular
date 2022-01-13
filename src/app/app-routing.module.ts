import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutComponent } from './layout/layout.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: InicioComponent
      },
      {
        path: 'productos',
        loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'error-404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: '/error-404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
