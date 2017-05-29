import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page} from "ui/page"

@Component({
  selector: "my-app",
  templateUrl:"pages/inicioSesion/inicioSesion.html",
  styleUrls: ["pages/inicioSesion/inicioSesion-common.css","pages/inicioSesion/inicioSesion.css"]
})
export class InicioSesionComponent {
  
  isLogginIn= true;
  constructor(private router : Router,page:Page){
    
    page.actionBarHidden = true;
  }

  submit(){
    if(this.isLogginIn){
      this.login();
    }else{
      this.signUp();
    }
}
login(){
  }
signUp(){
  this.router.navigate(["/bienvenida"]);
  }
  toggleDisplay(){
    this.isLogginIn = !this.isLogginIn;
  }
  forgot(){
    this.router.navigate(["/recuperar"])
  }
}