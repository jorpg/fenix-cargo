import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
@Component({
  selector: "my-app",
 templateUrl:"pages/login/login.html",
  styleUrls: ["pages/login/login-common.css","pages/login/login.css"]
})
export class LoginComponent {
 
  isLogginIn= true;

  constructor(private router : Router ,page:Page){
   
    page.actionBarHidden=true;
  }
login(){
  this.router.navigate(["/inicioSesion"])
 }
registrarse(){
  this.router.navigate(["/registrarse"])
  }
  toggleDisplay(){
    this.isLogginIn = !this.isLogginIn;
    
  }
}