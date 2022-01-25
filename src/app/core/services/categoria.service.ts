import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlbase = environment.url

  constructor(protected http: HttpClient) { }

  getCategorias(){
    return this.http.get<Categoria[]>(`${this.urlbase}/v1/categoria`)
  }

  sendCategoria(obj: Categoria){
    return this.http.post<Categoria>(`${this.urlbase}/v1/categoria`, obj)
  }

  updateCategoria(obj: Categoria, id: number){
    return this.http.put<Categoria>(`${this.urlbase}/v1/categoria/${id}`, obj)
  }

  deleteCategoria(id: number){
    return this.http.delete(`${this.urlbase}/v1/categoria/${id}`)
  }
}
