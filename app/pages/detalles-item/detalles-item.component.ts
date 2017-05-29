import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page} from "ui/page"
@Component({
    selector: "perfil",
    templateUrl: "./pages/detalles-item/detalles-item.html",
    styleUrls: ["pages/detalles-item/detalles-item-common.css","pages/detalles-item/detalles-item.css"]
})
export class DetallesItemComponent {

     constructor(private router : Router,page:Page){
    
  }

guardar(){
    this.router.navigate(["/solicitudes-holder"])
}
}