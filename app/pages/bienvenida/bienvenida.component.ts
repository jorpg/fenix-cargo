import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page} from "ui/page"

@Component({
  selector: "my-app",
  templateUrl:"pages/bienvenida/bienvenida.html",
  styleUrls: ["pages/bienvenida/bienvenida-common.css","pages/bienvenida/bienvenida.css"]
})
export class BienvenidaComponent {
  
  isLogginIn= true;
  constructor(private router : Router,page:Page){
    page.actionBarHidden = true;
  }

  back(){
    this.router.navigate(["/inicioSesion"])
    }
okButton(){
   this.router.navigate(["/perfil"])  
}
}