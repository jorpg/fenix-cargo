import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
    selector:"float-btn2",
    template:` <StackLayout class="float-btn" orientation="horizontal">
    <Button text="Pickup Nueva" (tap)="pickupNueva()" class="float-btn-text"></Button>
    </StackLayout>
    `,
    styles: [` 
    .float-btn {
       text-align: center;
       vertical-align: bottom;
     
}
.float-btn-text{
   background-color: #1976D2;
   width: 250;
   height: 40;
   color: #ffffff;
   vertical-align: middle;
   border-radius: 50%;
   font-size: 15;
   margin-right: 30;
}`]

})
export class FloatBtn2Component {
constructor(private router : Router ,page:Page){
  }
pickupNueva(){
  this.router.navigate(["/inicioSesion"])
 }

}