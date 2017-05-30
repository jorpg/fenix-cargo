import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page} from "ui/page";

@Component({
  selector: "my-app",
  templateUrl:"pages/registrarse/registrarse.html",
  styleUrls: ["pages/registrarse/registrarse-common.css","pages/registrarse/registrarse.css"]
})
export class RegistrarseComponent {
  
  isLogginIn= true;
  constructor(private router : Router,page:Page){
    page.actionBarHidden = true;
  }

  registrarse(){
      this.router.navigate(["/terminos"])
  }
  
}