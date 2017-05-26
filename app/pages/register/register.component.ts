import {Color} from "color";
import LabelModule = require("ui/label");
import {View} from "ui/core/view";
import { Component, ElementRef, OnInit, ViewChild, } from "@angular/core";
import {Page} from "ui/page";
import {Router} from "@angular/router";

@Component({
  selector: "register",
  templateUrl: "pages/register/register.html",
  styleUrls: ["pages/register/register-common.css", "pages/register/register.css"]
})
export class RegisterComponent implements OnInit {
    ngOnInit(): void {
        // this.page.actionBarHidden = false;
        this.page.backgroundImage = "res://bg_new";
    }
    @ViewChild("container") container: ElementRef;

    constructor(private page: Page, private router: Router) {
     
    }
    
    
}