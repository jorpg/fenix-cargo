import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page} from "ui/page";

@Component({
  selector: "my-app",
  templateUrl:"pages/nueva-direccion/nueva-direccion.html",
  styleUrls: ["pages/nueva-direccion/nueva-direccion-common.css","pages/nueva-direccion/nueva-direccion.css"]
})
export class NuevaDireccionComponent {
  
  public isChecked: boolean = false;
  
  constructor(private router : Router,page:Page){
    }

registrarse(){
    this.router.navigate(["/terminos"])
}

 
    direccion(){
      this.router.navigate(["/direccion"]);  
    }

}