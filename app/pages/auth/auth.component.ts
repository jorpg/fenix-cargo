import {Color} from "color";
import LabelModule = require("ui/label");
import {View} from "ui/core/view";
import { Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {Router} from "@angular/router";

@Component({
  selector: "auth",
  templateUrl: "pages/auth/auth.html",
  styleUrls: ["pages/auth/auth-common.css", "pages/auth/auth.css"]
})
export class AuthComponent implements OnInit {
    ngOnInit(): void {
        // this.page.actionBarHidden = false;
        this.page.backgroundImage = "res://bg_new";
    }
    @ViewChild("container") container: ElementRef;

    constructor(private page: Page, private router: Router) {
     
    }
    login() {
        console.log("LOGIN");
        this.router.navigate(["/login"]);
    }
    register() {
        console.log("REGISTER");
        this.router.navigate(["/register"]);
    }
    
}