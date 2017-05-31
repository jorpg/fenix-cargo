"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var InicioSesionComponent = (function () {
    function InicioSesionComponent(router, page) {
        this.router = router;
        this.isLogginIn = true;
        page.actionBarHidden = false;
    }
    InicioSesionComponent.prototype.submit = function () {
        if (this.isLogginIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    InicioSesionComponent.prototype.login = function () {
    };
    InicioSesionComponent.prototype.signUp = function () {
        this.router.navigate(["/bienvenida"]);
    };
    InicioSesionComponent.prototype.toggleDisplay = function () {
        this.isLogginIn = !this.isLogginIn;
    };
    InicioSesionComponent.prototype.forgot = function () {
        this.router.navigate(["/recuperar"]);
    };
    return InicioSesionComponent;
}());
InicioSesionComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "pages/inicioSesion/inicioSesion.html",
        styleUrls: ["pages/inicioSesion/inicioSesion-common.css", "pages/inicioSesion/inicioSesion.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], InicioSesionComponent);
exports.InicioSesionComponent = InicioSesionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pY2lvU2VzaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaWNpb1Nlc2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUE2QjtBQU83QixJQUFhLHFCQUFxQjtJQUdoQywrQkFBb0IsTUFBZSxFQUFDLElBQVM7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQURuQyxlQUFVLEdBQUUsSUFBSSxDQUFDO1FBRWYsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELHNDQUFNLEdBQU47UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFDRCxxQ0FBSyxHQUFMO0lBQ0UsQ0FBQztJQUNILHNDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELDZDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUgsNEJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLHFCQUFxQjtJQUxqQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFDLHNDQUFzQztRQUNsRCxTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBQyxxQ0FBcUMsQ0FBQztLQUNoRyxDQUFDO3FDQUk2QixlQUFNLEVBQU0sV0FBSTtHQUhsQyxxQkFBcUIsQ0EwQmpDO0FBMUJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlfSBmcm9tIFwidWkvcGFnZVwiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9pbmljaW9TZXNpb24vaW5pY2lvU2VzaW9uLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9pbmljaW9TZXNpb24vaW5pY2lvU2VzaW9uLWNvbW1vbi5jc3NcIixcInBhZ2VzL2luaWNpb1Nlc2lvbi9pbmljaW9TZXNpb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEluaWNpb1Nlc2lvbkNvbXBvbmVudCB7XG4gIFxuICBpc0xvZ2dpbkluPSB0cnVlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlcixwYWdlOlBhZ2Upe1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gIH1cblxuICBzdWJtaXQoKXtcbiAgICBpZih0aGlzLmlzTG9nZ2luSW4pe1xuICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICB9XG59XG5sb2dpbigpe1xuICB9XG5zaWduVXAoKXtcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2JpZW52ZW5pZGFcIl0pO1xuICB9XG4gIHRvZ2dsZURpc3BsYXkoKXtcbiAgICB0aGlzLmlzTG9nZ2luSW4gPSAhdGhpcy5pc0xvZ2dpbkluO1xuICB9XG4gIGZvcmdvdCgpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yZWN1cGVyYXJcIl0pXG4gIH1cbiAgICBcbn1cbiJdfQ==