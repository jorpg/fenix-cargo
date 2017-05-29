import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
  selector: "my-app",
 
  templateUrl:"pages/recuperar/recuperar.html",
  styleUrls: ["pages/recuperar/recuperar-common.css","pages/recuperar/recuperar.css"]
})
export class RecuperarComponent {

  isLogginIn= true;

  constructor(private router : Router ,page : Page){
   
    page.actionBarHidden=true;
  }
login(){
  this.router.navigate(["/inicioSesion"])
 }
ingresar(){
  this.router.navigate(["/ingresarCodigo"])
  }
  toggleDisplay(){
    this.isLogginIn = !this.isLogginIn;
    }
}