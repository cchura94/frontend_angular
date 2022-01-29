import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs';
import { Producto, PaginateProducto } from 'src/app/core/interfaces/producto';
import { ProductoService } from 'src/app/core/services/producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'stock'];
  lista_productos: Producto[] = [];
  total: number = 10
  dataSource: any
  // productos: Producto[] = []
  
  // lista_productos: any[] = []
  // lista_productos: any[] = []

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(protected prodService: ProductoService) {
  }
  ngOnInit(): void {
    //this.paginator.pageIndex = 0;
    //this.paginator.pageSize = 3;

    this.listaProductos();
    /*let personas = [
      {nombre: "cristian", direccion: {av: "abc"}},
      {nombre: "oscar"}];
    personas[0].nombre
    personas[1].direccion?.av
    */

    if(this.paginator?.pageIndex){
      console.log(this.paginator.pageIndex)
    }else{
      console.log("sin valor")
    }
  }

  ngAfterViewInit() {
    this.paginator.page.pipe(
      tap(() => this.listaProductos())
    ).subscribe()
    
    
    // this.lista_productos.paginator = this.paginator;
  }
  
  listaProductos(){

    this.prodService.getProductos(this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
      (data: any) => {
        let {rows, count} = data
        this.total = count
        // this.lista_productos = new MatTableDataSource(rows);
        // this.lista_productos.paginator = this.paginator;
        this.lista_productos = rows;
        
      },
      (error) => {
        console.log(error);
      }
    )
  }

  /*listaProductosFiltro(filterValue: string){

    this.prodService.getProductos(this.paginator?.pageIndex, this.paginator?.pageSize).subscribe(
      (data: any) => {
        let {rows, count} = data
        this.total = count
        // this.lista_productos = new MatTableDataSource(rows);
        // this.lista_productos.paginator = this.paginator;
        this.lista_productos = rows;
        this.dataSource = new MatTableDataSource(rows);
        this.dataSource.filter = filterValue.trim().toLowerCase();
      },
      (error) => {
        console.log(error);
      }
    )
  }*/

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue.trim().toLowerCase());
    // this.listaProductosFiltro(filterValue)
    
  }
}
