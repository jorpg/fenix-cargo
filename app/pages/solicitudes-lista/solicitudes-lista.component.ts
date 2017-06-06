import { Component,OnInit,ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ListViewEventData,RadListView} from "nativescript-telerik-ui/listview";
import { RadSideDrawerComponent,SideDrawerType} from "nativescript-telerik-ui/sidedrawer/angular";
import { View } from 'ui/core/view';
import * as Utils from "utils/utils";
import * as FrameModule from "ui/frame";
import * as Toast from 'nativescript-toast';
import { ListItemComponent} from "./list-item.component";
import { ModalDialogService} from 'nativescript-angular/directives/dialogs';

@Component({
    selector: "holder",
    templateUrl: "./pages/solicitudes-lista/solicitudes-lista.html",
    styleUrls: ["pages/solicitudes-lista/solicitudes-lista-common.css","pages/solicitudes-lista/solicitudes-lista.css"]
})
export class SolicitudesListaComponent implements OnInit {
    public items:Array<ListItemComponent>;
    private counter: number;
    private modal:ModalDialogService;
    private drawer:SideDrawerType
@ViewChild(RadSideDrawerComponent)
public drawerComponent: RadSideDrawerComponent;
constructor(private router : Router){
   this.items=[];
   this.counter=0;
   for (var i = 0; i < 20; i++) {
            this.items.push(new ListItemComponent(this.router));
            this.counter = i;
        }
    
 }

detallesItem(){
    this.router.navigate(["/detalles-item"]);

}
 ngOnInit(): void {
        this.drawer=this.drawerComponent.sideDrawer;
       
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
    public onMenuTapped() {
        Toast.makeText("usted se encuentra en la vista seleccionada").show();
        
    }
    
}