import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
    selector:"float-btn",
    template:` <StackLayout class="float-btn" orientation="horizontal">
    <Label class="float-btn-text" text="Cancelar" (tap)=cancelar()></Label>
    <Label class="float-btn-text" text="Aceptar" (tap)=aceptar()></Label>
    </StackLayout>
    `,
    styles: [` 
    Button {
    margin-top: 50%;
    margin-bottom: 10;
    width: 250;
    background-color: #1976D2;
    color: white;
    border-radius: 50%;
    }
    .float-btn {
       text-align: center;
       vertical-align: bottom;
    background-color: transparent;
}
.float-btn-text{
   background-color: #1976D2;
   width: 120;
   height: 40;
   color: #ffffff;
   vertical-align: middle;
   border-radius: 50%;
   font-size: 20;
   margin-right: 30;
}`]

})
export class FloatBtnComponent {
constructor(private router : Router ,page:Page){
    page.actionBarHidden=true;
  }
aceptar(){
  this.router.navigate(["/inicioSesion"])
 }
cancelar(){
  this.router.navigate(["/registrarse"])
  }
}