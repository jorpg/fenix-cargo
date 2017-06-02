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
    templateUrl: "./pages/solicitudes-holder/solicitudes-holder.html",
    styleUrls: ["pages/solicitudes-holder/solicitudes-holder-common.css","pages/solicitudes-holder/solicitudes-holder.css"]
})
export class SolicitudesHolderComponent implements OnInit {
    private drawer:SideDrawerType
@ViewChild(RadSideDrawerComponent)
public drawerComponent: RadSideDrawerComponent;

     constructor(private router : Router){
    
  }
  public ngOnInit(){
        this.drawer=this.drawerComponent.sideDrawer;
    }


solicitudesLista(){
    this.router.navigate(["/solicitudes-lista"])
}
public show(){
        this.drawer.showDrawer();
    }
public home(){
        this.router.navigate(["/solicitudes-lista"]);
    }
public direccion(){
        this.router.navigate(["/direccion"]);
    }
public perfil(){
    this.router.navigate(["/perfil"]);
}    
    public onMenuTapped() {
        Toast.makeText("usted se encuentra en la vista seleccionada").show();
        
    }
}