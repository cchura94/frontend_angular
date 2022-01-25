import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from './services/producto.service';
import { CategoriaService } from './services/categoria.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ProductoService, CategoriaService]
})
export class CoreModule { }
