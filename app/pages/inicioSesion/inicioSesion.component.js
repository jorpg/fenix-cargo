"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var InicioSesionComponent = (function () {
    function InicioSesionComponent(router, page) {
        this.router = router;
        this.isLogginIn = true;
        page.actionBarHidden = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pY2lvU2VzaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaWNpb1Nlc2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUE2QjtBQVE3QixJQUFhLHFCQUFxQjtJQUdoQywrQkFBb0IsTUFBZSxFQUFDLElBQVM7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQURuQyxlQUFVLEdBQUUsSUFBSSxDQUFDO1FBRWYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELHNDQUFNLEdBQU47UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFDRCxxQ0FBSyxHQUFMO0lBQ0UsQ0FBQztJQUNILHNDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELDZDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUgsNEJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLHFCQUFxQjtJQU5qQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFDLHNDQUFzQztRQUNsRCxTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBQyxxQ0FBcUMsQ0FBQztLQUNoRyxDQUFDO3FDQUs2QixlQUFNLEVBQU0sV0FBSTtHQUhsQyxxQkFBcUIsQ0EwQmpDO0FBMUJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZX0gZnJvbSBcInVpL3BhZ2VcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9pbmljaW9TZXNpb24vaW5pY2lvU2VzaW9uLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2luaWNpb1Nlc2lvbi9pbmljaW9TZXNpb24tY29tbW9uLmNzc1wiLFwicGFnZXMvaW5pY2lvU2VzaW9uL2luaWNpb1Nlc2lvbi5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmljaW9TZXNpb25Db21wb25lbnQge1xyXG4gIFxyXG4gIGlzTG9nZ2luSW49IHRydWU7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIscGFnZTpQYWdlKXtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpe1xyXG4gICAgaWYodGhpcy5pc0xvZ2dpbkluKXtcclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuc2lnblVwKCk7XHJcbiAgICB9XHJcbn1cclxubG9naW4oKXtcclxuICB9XHJcbnNpZ25VcCgpe1xyXG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9iaWVudmVuaWRhXCJdKTtcclxuICB9XHJcbiAgdG9nZ2xlRGlzcGxheSgpe1xyXG4gICAgdGhpcy5pc0xvZ2dpbkluID0gIXRoaXMuaXNMb2dnaW5JbjtcclxuICB9XHJcbiAgZm9yZ290KCl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmVjdXBlcmFyXCJdKVxyXG4gIH1cclxuICAgIFxyXG59XHJcbiJdfQ==