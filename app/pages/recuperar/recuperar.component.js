"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var RecuperarComponent = (function () {
    function RecuperarComponent(router, page) {
        this.router = router;
        this.isLogginIn = true;
        page.actionBarHidden = true;
    }
    RecuperarComponent.prototype.login = function () {
        this.router.navigate(["/inicioSesion"]);
    };
    RecuperarComponent.prototype.ingresar = function () {
        this.router.navigate(["/ingresarCodigo"]);
    };
    RecuperarComponent.prototype.toggleDisplay = function () {
        this.isLogginIn = !this.isLogginIn;
    };
    return RecuperarComponent;
}());
RecuperarComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "pages/recuperar/recuperar.html",
        styleUrls: ["pages/recuperar/recuperar-common.css", "pages/recuperar/recuperar.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], RecuperarComponent);
exports.RecuperarComponent = RecuperarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdXBlcmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY3VwZXJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUErQjtBQVEvQixJQUFhLGtCQUFrQjtJQUk3Qiw0QkFBb0IsTUFBZSxFQUFFLElBQVc7UUFBNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUZuQyxlQUFVLEdBQUUsSUFBSSxDQUFDO1FBSWYsSUFBSSxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNILGtDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUNGLHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBQ0QsMENBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ25DLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksa0JBQWtCO0lBTjlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUVsQixXQUFXLEVBQUMsZ0NBQWdDO1FBQzVDLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxFQUFDLCtCQUErQixDQUFDO0tBQ3BGLENBQUM7cUNBSzZCLGVBQU0sRUFBUyxXQUFJO0dBSnJDLGtCQUFrQixDQWlCOUI7QUFqQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9yZWN1cGVyYXIvcmVjdXBlcmFyLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3JlY3VwZXJhci9yZWN1cGVyYXItY29tbW9uLmNzc1wiLFwicGFnZXMvcmVjdXBlcmFyL3JlY3VwZXJhci5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlY3VwZXJhckNvbXBvbmVudCB7XHJcblxyXG4gIGlzTG9nZ2luSW49IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyICxwYWdlIDogUGFnZSl7XHJcbiAgIFxyXG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW49dHJ1ZTtcclxuICB9XHJcbmxvZ2luKCl7XHJcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2luaWNpb1Nlc2lvblwiXSlcclxuIH1cclxuaW5ncmVzYXIoKXtcclxuICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaW5ncmVzYXJDb2RpZ29cIl0pXHJcbiAgfVxyXG4gIHRvZ2dsZURpc3BsYXkoKXtcclxuICAgIHRoaXMuaXNMb2dnaW5JbiA9ICF0aGlzLmlzTG9nZ2luSW47XHJcbiAgICB9XHJcbn0iXX0=