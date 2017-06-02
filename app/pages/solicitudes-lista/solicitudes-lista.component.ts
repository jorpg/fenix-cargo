import { Component,OnInit,ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ItemService } from "./direccion.service";
import {Item}from "./item";
import { ListViewEventData,RadListView} from "nativescript-telerik-ui/listview";
import { RadSideDrawerComponent,SideDrawerType} from "nativescript-telerik-ui/sidedrawer/angular";
import { View } from 'ui/core/view';
import * as Utils from "utils/utils";
import * as FrameModule from "ui/frame";

@Component({
    selector: "holder",
    templateUrl: "./pages/solicitudes-lista/solicitudes-lista.html",
    styleUrls: ["pages/solicitudes-lista/solicitudes-lista-common.css","pages/solicitudes-lista/solicitudes-lista.css"]
})
export class SolicitudesListaComponent implements OnInit {
     items: Item[];
     private drawer:SideDrawerType
@ViewChild(RadSideDrawerComponent)
public drawerComponent: RadSideDrawerComponent;
     constructor(private router : Router,private itemService: ItemService){
    this.items = this.itemService.getItems();
    
 }

detallesItem(){
    this.router.navigate(["/detalles-item"]);

}
 ngOnInit(): void {
        this.drawer=this.drawerComponent.sideDrawer;
        this.items = this.itemService.getItems();
    }
    public show(){
        this.drawer.showDrawer();
    }

    public home(){
        this.router.navigate(["/solicitudes-lista"]);
    }

    public direcciones(){
        this.router.navigate(["/direccion"]);
    }
    public perfil (){
     this.router.navigate(["/perfil"]);
    }
    
}