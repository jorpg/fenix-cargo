import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { ModalDialogService} from 'nativescript-angular/directives/dialogs';
import { action} from "ui/dialogs";


@Component({
selector:"direccion-list-item",
template:`
  <StackLayout class="container">
  <Label text="Alias:" editable="false" class="field"></Label>
  <Label text="Lorem ipsum" editable="false" class="data"></Label>
  <Label text="Direccion:" editable="false" class="field"></Label>
  <Label text="Lorem ipsum dolor sit amet, consectetur" editable="false" class="data"></Label>
  <Label text="adipiscing elit. Donec eget elit sapien. Quis" editable="false" class="data"></Label>
  <Label text="que impediet nec nisl nec scelerisque..." editable="false" class="data"></Label>
  <StackLayout orientation="horizontal" class="buttonsContainer">
  <Label text="Eliminar" (tap)="displayActionDialog()" class ="eliminar"></Label>
  <Label text="Editar" (tap)="editar()" class ="buttons"></Label>
  </StackLayout>
  </StackLayout>
`,
styles: [` 
    .container {
       margin: 10;
       padding-left: 10;
       background-color:#ffffff;
}
.field{
   color: #757575;
   margin-left:5;
}
.data{
  color:#000000;
  margin-left:5;
}
.buttonsContainer{
  border-top-width: 1;
  border-color: #ccc;
}
.buttons{
    background-color:#ffffff;
    color:#000000;
    margin-left:40;
    font-size:20;
}
.eliminar{
  margin-left:110;
  background-color:#ffffff;
  color:#000000;
  font-size:20;
}`]


})
export class DireccionItemComponent{
  
constructor(private router : Router ,private modal: ModalDialogService){
   }
eliminar(){
  this.router.navigate(["/detalles-item"])
 }
editar(){
this.router.navigate(["/nueva-direccion"])
}
displayActionDialog() {
        // >> action-dialog-code
        let options = {
            title: "",
            message: "Confirme",
            cancelButtonText: "Ok",
            actions: ["Esta seguro que quiere borrar","esta direccion ?"]
        };

        action(options).then((result) => {
            
        });
        // << action-dialog-code
    }
}