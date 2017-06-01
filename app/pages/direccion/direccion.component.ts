import { Component,ViewChild,OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ListViewEventData,RadListView} from "nativescript-telerik-ui/listview";
import { RadSideDrawerComponent,SideDrawerType} from "nativescript-telerik-ui/sidedrawer/angular";
import { View } from 'ui/core/view';
import * as Utils from "utils/utils";
import * as FrameModule from "ui/frame";
import * as Toast from 'nativescript-toast';

@Component({
    selector: "holder",
    templateUrl: "./pages/direccion/direccion.html",
    styleUrls: ["pages/direccion/direccion-common.css","pages/direccion/direccion.css"]
})
export class DireccionComponent implements OnInit {
private drawer:SideDrawerType

@ViewChild(RadSideDrawerComponent)
public drawerComponent: RadSideDrawerComponent;
     constructor(private router : Router){
          
 }
public ngOnInit(){
        this.drawer=this.drawerComponent.sideDrawer;
    }
public show(){
        this.drawer.showDrawer();
    }
public home(){
        this.router.navigate(["/solicitudes-lista"])
    }

public direcciones(){
        this.router.navigate(["/direccion"])
    }
public perfil(){
    this.router.navigate(["/perfil"])
}

}