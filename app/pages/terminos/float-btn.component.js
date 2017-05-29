"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var FloatBtnComponent = (function () {
    function FloatBtnComponent(router, page) {
        this.router = router;
        page.actionBarHidden = true;
    }
    FloatBtnComponent.prototype.aceptar = function () {
        this.router.navigate(["/inicioSesion"]);
    };
    FloatBtnComponent.prototype.cancelar = function () {
        this.router.navigate(["/registrarse"]);
    };
    return FloatBtnComponent;
}());
FloatBtnComponent = __decorate([
    core_1.Component({
        selector: "float-btn",
        template: " <StackLayout class=\"float-btn\" orientation=\"horizontal\">\n    <Label class=\"float-btn-text\" text=\"Cancelar\" (tap)=cancelar()></Label>\n    <Label class=\"float-btn-text\" text=\"Aceptar\" (tap)=aceptar()></Label>\n    </StackLayout>\n    ",
        styles: [" \n    Button {\n    margin-top: 50%;\n    margin-bottom: 10;\n    width: 250;\n    background-color: #1976D2;\n    color: white;\n    border-radius: 50%;\n    }\n    .float-btn {\n       text-align: center;\n       vertical-align: bottom;\n    background-color: transparent;\n}\n.float-btn-text{\n   background-color: #1976D2;\n   width: 120;\n   height: 40;\n   color: #ffffff;\n   vertical-align: middle;\n   border-radius: 50%;\n   font-size: 20;\n   margin-right: 30;\n}"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], FloatBtnComponent);
exports.FloatBtnComponent = FloatBtnComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsb2F0LWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUErQjtBQW1DL0IsSUFBYSxpQkFBaUI7SUFDOUIsMkJBQW9CLE1BQWUsRUFBRSxJQUFTO1FBQTFCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNILG1DQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUNGLG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxpQkFBaUI7SUFqQzdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUMsV0FBVztRQUNwQixRQUFRLEVBQUMseVBBSVI7UUFDRCxNQUFNLEVBQUUsQ0FBQyw2ZEF1QlgsQ0FBQztLQUVGLENBQUM7cUNBRTJCLGVBQU0sRUFBTyxXQUFJO0dBRGpDLGlCQUFpQixDQVU3QjtBQVZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6XCJmbG9hdC1idG5cIixcbiAgICB0ZW1wbGF0ZTpgIDxTdGFja0xheW91dCBjbGFzcz1cImZsb2F0LWJ0blwiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgIDxMYWJlbCBjbGFzcz1cImZsb2F0LWJ0bi10ZXh0XCIgdGV4dD1cIkNhbmNlbGFyXCIgKHRhcCk9Y2FuY2VsYXIoKT48L0xhYmVsPlxuICAgIDxMYWJlbCBjbGFzcz1cImZsb2F0LWJ0bi10ZXh0XCIgdGV4dD1cIkFjZXB0YXJcIiAodGFwKT1hY2VwdGFyKCk+PC9MYWJlbD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYCBcbiAgICBCdXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDtcbiAgICB3aWR0aDogMjUwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2RDI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgLmZsb2F0LWJ0biB7XG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZmxvYXQtYnRuLXRleHR7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NkQyO1xuICAgd2lkdGg6IDEyMDtcbiAgIGhlaWdodDogNDA7XG4gICBjb2xvcjogI2ZmZmZmZjtcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBmb250LXNpemU6IDIwO1xuICAgbWFyZ2luLXJpZ2h0OiAzMDtcbn1gXVxuXG59KVxuZXhwb3J0IGNsYXNzIEZsb2F0QnRuQ29tcG9uZW50IHtcbmNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyICxwYWdlOlBhZ2Upe1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuPXRydWU7XG4gIH1cbmFjZXB0YXIoKXtcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2luaWNpb1Nlc2lvblwiXSlcbiB9XG5jYW5jZWxhcigpe1xuICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmVnaXN0cmFyc2VcIl0pXG4gIH1cbn0iXX0=