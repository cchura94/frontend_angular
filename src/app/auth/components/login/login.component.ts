import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }
  // node (nestjs - typeORM - Angular)
  ingresar(){
    this.loginService.login(this.loginForm.value).subscribe(
      (res: any) => {
        if(res.error){
          alert(res.mensaje)
        }else{
          console.log(res)
          localStorage.setItem("access_token", res.access_token);
          this.router.navigate(["/admin"])
        }          
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

}
