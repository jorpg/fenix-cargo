import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "holder",
    templateUrl: "./pages/solicitudes-lista/solicitudes-lista.html",
    styleUrls: ["pages/solicitudes-lista/solicitudes-lista-common.css","pages/solicitudes-lista/solicitudes-lista.css"]
})
export class SolicitudesListaComponent {
     constructor(private router : Router){
     }

detallesItem(){
    this.router.navigate(["/detalles-item"])
}
}