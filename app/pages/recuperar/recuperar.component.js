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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdXBlcmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY3VwZXJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUErQjtBQVEvQixJQUFhLGtCQUFrQjtJQUk3Qiw0QkFBb0IsTUFBZSxFQUFFLElBQVc7UUFBNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUZuQyxlQUFVLEdBQUUsSUFBSSxDQUFDO1FBSWYsSUFBSSxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNILGtDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUNGLHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBQ0QsMENBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ25DLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksa0JBQWtCO0lBTjlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUVsQixXQUFXLEVBQUMsZ0NBQWdDO1FBQzVDLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxFQUFDLCtCQUErQixDQUFDO0tBQ3BGLENBQUM7cUNBSzZCLGVBQU0sRUFBUyxXQUFJO0dBSnJDLGtCQUFrQixDQWlCOUI7QUFqQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gXG4gIHRlbXBsYXRlVXJsOlwicGFnZXMvcmVjdXBlcmFyL3JlY3VwZXJhci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvcmVjdXBlcmFyL3JlY3VwZXJhci1jb21tb24uY3NzXCIsXCJwYWdlcy9yZWN1cGVyYXIvcmVjdXBlcmFyLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBSZWN1cGVyYXJDb21wb25lbnQge1xuXG4gIGlzTG9nZ2luSW49IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIgLHBhZ2UgOiBQYWdlKXtcbiAgIFxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuPXRydWU7XG4gIH1cbmxvZ2luKCl7XG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9pbmljaW9TZXNpb25cIl0pXG4gfVxuaW5ncmVzYXIoKXtcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2luZ3Jlc2FyQ29kaWdvXCJdKVxuICB9XG4gIHRvZ2dsZURpc3BsYXkoKXtcbiAgICB0aGlzLmlzTG9nZ2luSW4gPSAhdGhpcy5pc0xvZ2dpbkluO1xuICAgIH1cbn0iXX0=