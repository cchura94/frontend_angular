import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface loginUser {
  email: string, 
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlbase = environment.url

  constructor(private http: HttpClient) { }

  login(datos: loginUser){
    return this.http.post(`${this.urlbase}/v1/auth/login`, datos);
  }

}
