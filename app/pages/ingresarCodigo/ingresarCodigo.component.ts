import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page} from "ui/page";
@Component({
  selector: "my-app",
  templateUrl:"pages/ingresarCodigo/ingresarCodigo.html",
  styleUrls: ["pages/ingresarCodigo/ingresarCodigo-common.css","pages/ingresarCodigo/ingresarCodigo.css"]
})
export class IngresarCodigoComponent {
  
  isLogginIn= true;

  constructor(private router : Router , page:Page){
   page.actionBarHidden=true;
  }

  submit(){
    this.router.navigate(["/inicioSesion"])
}
login(){
  }
signUp(){
  }
  toggleDisplay(){
    this.isLogginIn = !this.isLogginIn;
  }
  forgot(){
    
  }
}