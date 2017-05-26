import {Color} from "color";
import LabelModule = require("ui/label");
import {View} from "ui/core/view";
import { Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {Router} from "@angular/router";

@Component({
  selector: "pass",
  templateUrl: "pages/pass/pass.html",
  styleUrls: ["pages/pass/pass-common.css", "pages/pass/pass.css"]
})
export class PassComponent implements OnInit {
    ngOnInit(): void {
        // this.page.actionBarHidden = false;
        this.page.backgroundImage = "res://bg_new";
    }
    @ViewChild("container") container: ElementRef;

    constructor(private page: Page, private router: Router) {
     
    }

    code() {
        console.log("INTRO CODE");
        this.router.navigate(["/code"]);
    }
}