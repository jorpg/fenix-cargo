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
        template: " <StackLayout class=\"float-btn\" orientation=\"horizontal\">\n                  <Button class=\"float-btn-text\" text=\"Cancelar\" (tap)=cancelar() ></Button>\n                  <Button class=\"float-btn-text\" text=\"Aceptar\" (tap)=aceptar() ></Button>\n              </StackLayout>",
        styles: [" \n                Button {\n                margin-top: 50%;\n                margin-bottom: 10;\n                width: 250;\n                background-color: #1976D2;\n                color: white;\n                border-radius: 50%;\n                }\n                .float-btn {\n                  text-align: center;\n                  vertical-align: bottom;\n                background-color: transparent;\n                }\n                .float-btn-text{\n                  background-color: #1976D2;\n                  width: 150;\n                  height: 40;\n                  color: #ffffff;\n                  vertical-align: middle;\n                  border-radius: 50%;\n                  font-size: 16;\n                  margin-left: ;\n                  margin-right: 5;\n                }"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], FloatBtnComponent);
exports.FloatBtnComponent = FloatBtnComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsb2F0LWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUErQjtBQW9DL0IsSUFBYSxpQkFBaUI7SUFDOUIsMkJBQW9CLE1BQWUsRUFBRSxJQUFTO1FBQTFCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNILG1DQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUNGLG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxpQkFBaUI7SUFsQzdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUMsV0FBVztRQUNwQixRQUFRLEVBQUMsK1JBR2dCO1FBRWIsTUFBTSxFQUFFLENBQUMsb3pCQXdCUCxDQUFDO0tBRWxCLENBQUM7cUNBRTJCLGVBQU0sRUFBTyxXQUFJO0dBRGpDLGlCQUFpQixDQVU3QjtBQVZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOlwiZmxvYXQtYnRuXCIsXHJcbiAgICB0ZW1wbGF0ZTpgIDxTdGFja0xheW91dCBjbGFzcz1cImZsb2F0LWJ0blwiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiZmxvYXQtYnRuLXRleHRcIiB0ZXh0PVwiQ2FuY2VsYXJcIiAodGFwKT1jYW5jZWxhcigpID48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImZsb2F0LWJ0bi10ZXh0XCIgdGV4dD1cIkFjZXB0YXJcIiAodGFwKT1hY2VwdGFyKCkgPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+YCxcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHN0eWxlczogW2AgXHJcbiAgICAgICAgICAgICAgICBCdXR0b24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZEMjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mbG9hdC1idG4ge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mbG9hdC1idG4tdGV4dHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZEMjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNjtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1O1xyXG4gICAgICAgICAgICAgICAgfWBdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmxvYXRCdG5Db21wb25lbnQge1xyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlciAscGFnZTpQYWdlKXtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuPXRydWU7XHJcbiAgfVxyXG5hY2VwdGFyKCl7XHJcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2luaWNpb1Nlc2lvblwiXSlcclxuIH1cclxuY2FuY2VsYXIoKXtcclxuICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmVnaXN0cmFyc2VcIl0pXHJcbiAgfVxyXG59Il19