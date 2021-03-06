import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { PaginateProducto, Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlbase = environment.url

  constructor(protected http: HttpClient) { }

  getProductos(page: number= 0, limit:number= 2){
    page = page+1;
    return this.http.get(`${this.urlbase}/v1/producto?page=${page}&limit=${limit}`)
  }

  sendProducto(datos: FormGroup){
    // formdata
    const formData: FormData = new FormData();
    formData.append('nombre', datos.value.nombre)
    formData.append('precio', datos.value.precio)
    formData.append('stock', datos.value.stock)
    formData.append('descripcion', datos.value.descripcion)
    formData.append('categoria_id', datos.value.categoria_id)
    formData.append('imagen', datos.get('imagen')?.value)

    return this.http.post<Producto[]>(`${this.urlbase}/v1/producto`, formData)
  }


}
