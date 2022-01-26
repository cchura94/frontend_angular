import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    try{
      let token = localStorage.getItem("access_token");
      
      if(token){
        // verificar la fecha de vencimiento de token
        const base64 = token.split(".")[1];
        let {exp} = JSON.parse(atob(base64))
        const expirado = Date.now() >= exp *1000
        console.log(expirado)
        if(expirado){
          alert("El token ha expirado");
          this.logout()
          return false;
        }
        return true;
      }else{
        this.logout()
        return false;
      }
    }catch(error){
      this.logout()
      return false;
    }
  }

  logout(){
    localStorage.removeItem("access_token")
    this.router.navigate(["/auth/login"]);
  }
  
}
