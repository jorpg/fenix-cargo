import { Component,ViewChild,OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { Page} from "ui/page"
import { ListViewEventData,RadListView} from "nativescript-telerik-ui/listview";
import { RadSideDrawerComponent,SideDrawerType} from "nativescript-telerik-ui/sidedrawer/angular";
import { View } from 'ui/core/view';
import * as Utils from "utils/utils";
import * as FrameModule from "ui/frame";
import * as Toast from 'nativescript-toast';

@Component({
    selector: "perfil",
    templateUrl: "./pages/perfil/perfil.html",
    styleUrls: ["pages/perfil/perfil-common.css","pages/perfil/perfil.css"]
})
export class PerfilComponent implements OnInit {
private drawer:SideDrawerType
@ViewChild(RadSideDrawerComponent)
public drawerComponent: RadSideDrawerComponent;

     constructor(private router : Router,page:Page){
    
  }
  public ngOnInit(){
        this.drawer=this.drawerComponent.sideDrawer;
    }

guardar(){
    this.router.navigate(["/solicitudes-holder"])
}
 public show(){
        this.drawer.showDrawer();
    }

     public onMenuTapped() {
        Toast.makeText("usted se encuentra en la vista seleccionada").show();
        
    }

    public home(){
        this.router.navigate(["/solicitudes-lista"])
    }

    public direcciones(){
        this.router.navigate(["/direccion"])
    }
}