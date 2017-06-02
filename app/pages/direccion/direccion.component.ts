import { Component,ViewChild,OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ListViewEventData,RadListView} from "nativescript-telerik-ui/listview";
import { RadSideDrawerComponent,SideDrawerType} from "nativescript-telerik-ui/sidedrawer/angular";
import { View } from 'ui/core/view';
import * as Utils from "utils/utils";
import * as FrameModule from "ui/frame";
import * as Toast from 'nativescript-toast';
import { DireccionItemComponent} from "./direccion-item.component";
import { ModalDialogService} from 'nativescript-angular/directives/dialogs';
@Component({
    selector: "holder",
    templateUrl: "./pages/direccion/direccion.html",
    styleUrls: ["pages/direccion/direccion-common.css","pages/direccion/direccion.css"]
})
export class DireccionComponent implements OnInit {
private drawer:SideDrawerType
public  items: Array<DireccionItemComponent>;
private counter: number;
private modal:ModalDialogService;
@ViewChild(RadSideDrawerComponent)
public drawerComponent: RadSideDrawerComponent;
     constructor(private router : Router){
         this.items = [];
         this.counter = 0;
        for (var i = 0; i < 20; i++) {
            this.items.push(new DireccionItemComponent(this.router,this.modal));
            this.counter = i;
        }
          
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