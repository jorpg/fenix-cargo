"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var SolicitudesHolderComponent = (function () {
    function SolicitudesHolderComponent(router) {
        this.router = router;
    }
    SolicitudesHolderComponent.prototype.ngOnInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    SolicitudesHolderComponent.prototype.solicitudesLista = function () {
        this.router.navigate(["/solicitudes-lista"]);
    };
    SolicitudesHolderComponent.prototype.show = function () {
        this.drawer.showDrawer();
    };
    SolicitudesHolderComponent.prototype.home = function () {
        this.router.navigate(["/solicitudes-lista"]);
    };
    SolicitudesHolderComponent.prototype.direccion = function () {
        this.router.navigate(["/direccion"]);
    };
    return SolicitudesHolderComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], SolicitudesHolderComponent.prototype, "drawerComponent", void 0);
SolicitudesHolderComponent = __decorate([
    core_1.Component({
        selector: "holder",
        templateUrl: "./pages/solicitudes-holder/solicitudes-holder.html",
        styleUrls: ["pages/solicitudes-holder/solicitudes-holder-common.css", "pages/solicitudes-holder/solicitudes-holder.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SolicitudesHolderComponent);
exports.SolicitudesHolderComponent = SolicitudesHolderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdHVkZXMtaG9sZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXR1ZGVzLWhvbGRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsMENBQXlDO0FBRXpDLHNFQUFrRztBQVdsRyxJQUFhLDBCQUEwQjtJQUtsQyxvQ0FBb0IsTUFBZTtRQUFmLFdBQU0sR0FBTixNQUFNLENBQVM7SUFFdEMsQ0FBQztJQUNNLDZDQUFRLEdBQWY7UUFDTSxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2hELENBQUM7SUFHTCxxREFBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBQ00seUNBQUksR0FBWDtRQUNRLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNFLHlDQUFJLEdBQVg7UUFDUSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBQ0UsOENBQVMsR0FBaEI7UUFDUSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUNMLGlDQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXRCRDtJQURDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQ1YsZ0NBQXNCO21FQUFDO0FBSGxDLDBCQUEwQjtJQUx0QyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9EQUFvRDtRQUNqRSxTQUFTLEVBQUUsQ0FBQyx3REFBd0QsRUFBQyxpREFBaUQsQ0FBQztLQUMxSCxDQUFDO3FDQU1nQyxlQUFNO0dBTDNCLDBCQUEwQixDQXlCdEM7QUF6QlksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFZpZXdDaGlsZCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLFJhZExpc3RWaWV3fSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXdcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCxTaWRlRHJhd2VyVHlwZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCAqIGFzIEZyYW1lTW9kdWxlIGZyb20gXCJ1aS9mcmFtZVwiO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJob2xkZXJcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvc29saWNpdHVkZXMtaG9sZGVyL3NvbGljaXR1ZGVzLWhvbGRlci5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3NvbGljaXR1ZGVzLWhvbGRlci9zb2xpY2l0dWRlcy1ob2xkZXItY29tbW9uLmNzc1wiLFwicGFnZXMvc29saWNpdHVkZXMtaG9sZGVyL3NvbGljaXR1ZGVzLWhvbGRlci5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvbGljaXR1ZGVzSG9sZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgZHJhd2VyOlNpZGVEcmF3ZXJUeXBlXHJcbkBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudClcclxucHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuXHJcbiAgICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIpe1xyXG4gICAgXHJcbiAgfVxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuZHJhd2VyPXRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICB9XHJcblxyXG5cclxuc29saWNpdHVkZXNMaXN0YSgpe1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NvbGljaXR1ZGVzLWxpc3RhXCJdKVxyXG59XHJcbnB1YmxpYyBzaG93KCl7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5wdWJsaWMgaG9tZSgpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zb2xpY2l0dWRlcy1saXN0YVwiXSlcclxuICAgIH1cclxucHVibGljIGRpcmVjY2lvbigpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9kaXJlY2Npb25cIl0pXHJcbiAgICB9XHJcbn0iXX0=