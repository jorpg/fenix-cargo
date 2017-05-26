import {Color} from "color";
import LabelModule = require("ui/label");
import {View} from "ui/core/view";
import { Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {Router} from "@angular/router";

@Component({
  selector: "code",
  templateUrl: "pages/code/code.html",
  styleUrls: ["pages/code/code-common.css", "pages/code/code.css"]
})
export class CodeComponent implements OnInit {
    ngOnInit(): void {
        // this.page.actionBarHidden = false;
        this.page.backgroundImage = "res://bg_new";
    }
    @ViewChild("container") container: ElementRef;

    constructor(private page: Page, private router: Router) {
     
    }

    
}