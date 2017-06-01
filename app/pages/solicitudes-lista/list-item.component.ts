import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
@Component({
selector:"list-item",
template:`
  <StackLayout orientation="horizontal" (tap)="detalles()" >
  <StackLayout class="container"></StackLayout>
  <StackLayout orientation="horizontal">
  <StackLayout orientation="vertical" class="details">
  <Label text="Estatus:" editable="false"></Label>
  <Label text="Ancho:" editable="false"></Label>
  <Label text="largo:" editable="false"></Label>
  <Label text="Peso:" editable="false"></Label>
  <Label text="Dirección" editable="false"></Label>
  </StackLayout>
  <StackLayout orientation="vertical" class="detail">
  <Label text="Alto: " editable="false"></Label>
  </StackLayout>
  <StackLayout orientation="vertical">
  <Label text="&#xf2fb;" class="material-icon"></Label>
  </StackLayout>
  </StackLayout>
  </StackLayout>
`,
styles: [` 
    .container {
    background-image: url("res://paquetes");
    background-repeat: no-repeat;     
    margin: 0;
    background-color:#ffffff;
    width:120;
    height:100;
}


.details{
   margin-top:10;
   margin-right:20;
   margin-left:20;
}
.detail{
    margin-top:30;
    margin-right:20;
}
.material-icon{
    font-family: 'Material-Design-Iconic-Font';
    font-size: 30;
    width: 40;
    color: #757575;
    margin-left:40;
}`]


})
export class ListItemComponent{
constructor(private router : Router ,page:Page){
   }
detalles(){
  this.router.navigate(["/detalles-item"])
 }
}