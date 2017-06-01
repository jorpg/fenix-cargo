import { Component,OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ItemService } from "./direccion.service";
import {Item}from "./item";
@Component({
    selector: "holder",
    templateUrl: "./pages/solicitudes-lista/solicitudes-lista.html",
    styleUrls: ["pages/solicitudes-lista/solicitudes-lista-common.css","pages/solicitudes-lista/solicitudes-lista.css"]
})
export class SolicitudesListaComponent implements OnInit {
     items: Item[];
     constructor(private router : Router,private itemService: ItemService){
    this.items = this.itemService.getItems();
 }

detallesItem(){
    this.router.navigate(["/detalles-item"])
}
 ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}