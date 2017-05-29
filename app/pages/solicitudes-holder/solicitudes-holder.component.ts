import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "holder",
    templateUrl: "./pages/solicitudes-holder/solicitudes-holder.html",
    styleUrls: ["pages/solicitudes-holder/solicitudes-holder-common.css","pages/solicitudes-holder/solicitudes-holder.css"]
})
export class SolicitudesHolderComponent {
     constructor(private router : Router){
     }

solicitudesLista(){
    this.router.navigate(["/solicitudes-lista"])
}
}