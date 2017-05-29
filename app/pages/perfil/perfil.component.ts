import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page} from "ui/page"
@Component({
    selector: "perfil",
    templateUrl: "./pages/perfil/perfil.html",
    styleUrls: ["pages/perfil/perfil-common.css","pages/perfil/perfil.css"]
})
export class PerfilComponent {

     constructor(private router : Router,page:Page){
    
  }

guardar(){
    this.router.navigate(["/solicitudes-holder"])
}
}