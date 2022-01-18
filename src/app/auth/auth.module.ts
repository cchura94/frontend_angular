import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './components/login/login.service';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule, // para peticiones http (GET, POST)
    ReactiveFormsModule, // Formularios reactivos
    MaterialModule, // habilitar los componentes de MaterialAngular
  ],
  providers: [LoginService]
})
export class AuthModule { }
