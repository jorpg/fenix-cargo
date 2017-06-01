"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var TerminosComponent = (function () {
    function TerminosComponent(router, page) {
        this.router = router;
        this.isLogginIn = true;
        page.actionBarHidden = true;
    }
    TerminosComponent.prototype.aceptar = function () {
        this.router.navigate(["/inicioSesion"]);
    };
    TerminosComponent.prototype.cancelar = function () {
        this.router.navigate(["/registrarse"]);
    };
    return TerminosComponent;
}());
TerminosComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "pages/terminos/terminos.html",
        styleUrls: ["pages/terminos/terminos-common.css", "pages/terminos/terminos.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], TerminosComponent);
exports.TerminosComponent = TerminosComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybWlub3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVybWlub3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFNL0IsSUFBYSxpQkFBaUI7SUFJNUIsMkJBQW9CLE1BQWUsRUFBRSxJQUFTO1FBQTFCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFGbkMsZUFBVSxHQUFFLElBQUksQ0FBQztRQUdmLElBQUksQ0FBQyxlQUFlLEdBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDSCxtQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDRixvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFSCx3QkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUMsOEJBQThCO1FBQzFDLFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxFQUFDLDZCQUE2QixDQUFDO0tBQ2hGLENBQUM7cUNBSzZCLGVBQU0sRUFBTyxXQUFJO0dBSm5DLGlCQUFpQixDQWM3QjtBQWRZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHRlbXBsYXRlVXJsOlwicGFnZXMvdGVybWlub3MvdGVybWlub3MuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvdGVybWlub3MvdGVybWlub3MtY29tbW9uLmNzc1wiLFwicGFnZXMvdGVybWlub3MvdGVybWlub3MuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXJtaW5vc0NvbXBvbmVudCB7XHJcbiAgXHJcbiAgaXNMb2dnaW5Jbj0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIgLHBhZ2U6UGFnZSl7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbj10cnVlO1xyXG4gIH1cclxuYWNlcHRhcigpe1xyXG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9pbmljaW9TZXNpb25cIl0pXHJcbiB9XHJcbmNhbmNlbGFyKCl7XHJcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3JlZ2lzdHJhcnNlXCJdKVxyXG4gIH1cclxuIFxyXG59Il19