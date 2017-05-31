import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
    selector:"float-btn",
    template:` <StackLayout class="float-btn" orientation="horizontal">
                  <Button class="float-btn-text" text="Cancelar" (tap)=cancelar() ></Button>
                  <Button class="float-btn-text" text="Aceptar" (tap)=aceptar() ></Button>
              </StackLayout>`,
              
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
                  width: 150;
                  height: 40;
                  color: #ffffff;
                  vertical-align: middle;
                  border-radius: 50%;
                  font-size: 16;
                  margin-left: ;
                  margin-right: 5;
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