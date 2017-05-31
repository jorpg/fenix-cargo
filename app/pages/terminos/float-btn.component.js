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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsb2F0LWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUErQjtBQW9DL0IsSUFBYSxpQkFBaUI7SUFDOUIsMkJBQW9CLE1BQWUsRUFBRSxJQUFTO1FBQTFCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNILG1DQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUNGLG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxpQkFBaUI7SUFsQzdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUMsV0FBVztRQUNwQixRQUFRLEVBQUMsK1JBR2dCO1FBRWIsTUFBTSxFQUFFLENBQUMsb3pCQXdCUCxDQUFDO0tBRWxCLENBQUM7cUNBRTJCLGVBQU0sRUFBTyxXQUFJO0dBRGpDLGlCQUFpQixDQVU3QjtBQVZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6XCJmbG9hdC1idG5cIixcbiAgICB0ZW1wbGF0ZTpgIDxTdGFja0xheW91dCBjbGFzcz1cImZsb2F0LWJ0blwiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImZsb2F0LWJ0bi10ZXh0XCIgdGV4dD1cIkNhbmNlbGFyXCIgKHRhcCk9Y2FuY2VsYXIoKSA+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiZmxvYXQtYnRuLXRleHRcIiB0ZXh0PVwiQWNlcHRhclwiICh0YXApPWFjZXB0YXIoKSA+PC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+YCxcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBbYCBcbiAgICAgICAgICAgICAgICBCdXR0b24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2RDI7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZsb2F0LWJ0biB7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmxvYXQtYnRuLXRleHR7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NkQyO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MDtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNDA7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTtcbiAgICAgICAgICAgICAgICB9YF1cblxufSlcbmV4cG9ydCBjbGFzcyBGbG9hdEJ0bkNvbXBvbmVudCB7XG5jb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlciAscGFnZTpQYWdlKXtcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbj10cnVlO1xuICB9XG5hY2VwdGFyKCl7XG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9pbmljaW9TZXNpb25cIl0pXG4gfVxuY2FuY2VsYXIoKXtcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3JlZ2lzdHJhcnNlXCJdKVxuICB9XG59Il19