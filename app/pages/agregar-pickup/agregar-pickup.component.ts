import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page} from "ui/page";
import { ModalDialogService} from 'nativescript-angular/directives/dialogs';
import { action} from "ui/dialogs";
@Component({
  selector: "my-app",
  templateUrl:"pages/agregar-pickup/agregar-pickup.html",
  styleUrls: ["pages/agregar-pickup/agregar-pickup-common.css","pages/agregar-pickup/agregar-pickup.css"]
})
export class AgregarPickUpComponent {
  
  public isChecked: boolean = false;
  
  constructor(private router : Router,page:Page,private modal: ModalDialogService){
    }

registrarse(){
    this.router.navigate(["/terminos"])
}

 displayActionDialog() {
        // >> action-dialog-code
        let options = {
            title: "Direcciones",
            message: "Choose your address",
            cancelButtonText: "Ok",
            actions: ["Alias1", "Alias2", "Alias3", "Alias4", "Alias5"]
        };

        action(options).then((result) => {
            console.log(result);
        });
        // << action-dialog-code
    }

}