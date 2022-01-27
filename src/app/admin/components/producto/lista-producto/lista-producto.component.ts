import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/core/services/producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  
  lista_productos: any[] = []
  constructor(protected prodService: ProductoService) { }

  ngOnInit(): void {
    this.listaProductos();
  }
  
  listaProductos(){
    this.prodService.getProductos().subscribe(
      (res: any[]) => {
        this.lista_productos = res
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
