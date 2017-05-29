import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
@Component({
  selector: "my-app",
  templateUrl:"pages/terminos/terminos.html",
  styleUrls: ["pages/terminos/terminos-common.css","pages/terminos/terminos.css"]
})
export class TerminosComponent {
  
  isLogginIn= true;

  constructor(private router : Router ,page:Page){
    page.actionBarHidden=true;
  }
aceptar(){
  this.router.navigate(["/inicioSesion"])
 }
cancelar(){
  this.router.navigate(["/registrarse"])
  }
 
}