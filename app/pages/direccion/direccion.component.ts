import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "holder",
    templateUrl: "./pages/direccion/direccion.html",
    styleUrls: ["pages/direccion/direccion-common.css","pages/direccion/direccion.css"]
})
export class DireccionComponent {
     constructor(private router : Router){
     }

}