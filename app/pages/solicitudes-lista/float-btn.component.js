"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var FloatBtn2Component = (function () {
    function FloatBtn2Component(router, page) {
        this.router = router;
    }
    FloatBtn2Component.prototype.pickupNueva = function () {
        this.router.navigate(["/inicioSesion"]);
    };
    return FloatBtn2Component;
}());
FloatBtn2Component = __decorate([
    core_1.Component({
        selector: "float-btn2",
        template: " <StackLayout class=\"float-btn\" orientation=\"horizontal\">\n    <Button text=\"Pickup Nueva\" (tap)=\"pickupNueva()\" class=\"float-btn-text\"></Button>\n    </StackLayout>\n    ",
        styles: [" \n    .float-btn {\n       text-align: center;\n       vertical-align: bottom;\n     \n}\n.float-btn-text{\n   background-color: #1976D2;\n   width: 250;\n   height: 40;\n   color: #ffffff;\n   vertical-align: middle;\n   border-radius: 50%;\n   font-size: 15;\n   margin-right: 30;\n}"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], FloatBtn2Component);
exports.FloatBtn2Component = FloatBtn2Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsb2F0LWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUErQjtBQTBCL0IsSUFBYSxrQkFBa0I7SUFDL0IsNEJBQW9CLE1BQWUsRUFBRSxJQUFTO1FBQTFCLFdBQU0sR0FBTixNQUFNLENBQVM7SUFDakMsQ0FBQztJQUNILHdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUVGLHlCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxrQkFBa0I7SUF4QjlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUMsWUFBWTtRQUNyQixRQUFRLEVBQUMsdUxBR1I7UUFDRCxNQUFNLEVBQUUsQ0FBQyxnU0FlWCxDQUFDO0tBRUYsQ0FBQztxQ0FFMkIsZUFBTSxFQUFPLFdBQUk7R0FEakMsa0JBQWtCLENBTzlCO0FBUFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjpcImZsb2F0LWJ0bjJcIixcbiAgICB0ZW1wbGF0ZTpgIDxTdGFja0xheW91dCBjbGFzcz1cImZsb2F0LWJ0blwiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgIDxCdXR0b24gdGV4dD1cIlBpY2t1cCBOdWV2YVwiICh0YXApPVwicGlja3VwTnVldmEoKVwiIGNsYXNzPVwiZmxvYXQtYnRuLXRleHRcIj48L0J1dHRvbj5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYCBcbiAgICAuZmxvYXQtYnRuIHtcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgXG59XG4uZmxvYXQtYnRuLXRleHR7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NkQyO1xuICAgd2lkdGg6IDI1MDtcbiAgIGhlaWdodDogNDA7XG4gICBjb2xvcjogI2ZmZmZmZjtcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBmb250LXNpemU6IDE1O1xuICAgbWFyZ2luLXJpZ2h0OiAzMDtcbn1gXVxuXG59KVxuZXhwb3J0IGNsYXNzIEZsb2F0QnRuMkNvbXBvbmVudCB7XG5jb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlciAscGFnZTpQYWdlKXtcbiAgfVxucGlja3VwTnVldmEoKXtcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2luaWNpb1Nlc2lvblwiXSlcbiB9XG5cbn0iXX0=