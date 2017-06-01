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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdHVkZXMtaG9sZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXR1ZGVzLWhvbGRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsMENBQXlDO0FBRXpDLHNFQUFrRztBQVdsRyxJQUFhLDBCQUEwQjtJQUtsQyxvQ0FBb0IsTUFBZTtRQUFmLFdBQU0sR0FBTixNQUFNLENBQVM7SUFFdEMsQ0FBQztJQUNNLDZDQUFRLEdBQWY7UUFDTSxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2hELENBQUM7SUFHTCxxREFBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBQ00seUNBQUksR0FBWDtRQUNRLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNFLHlDQUFJLEdBQVg7UUFDUSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBQ0UsOENBQVMsR0FBaEI7UUFDUSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUNMLGlDQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXRCRDtJQURDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQ1YsZ0NBQXNCO21FQUFDO0FBSGxDLDBCQUEwQjtJQUx0QyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9EQUFvRDtRQUNqRSxTQUFTLEVBQUUsQ0FBQyx3REFBd0QsRUFBQyxpREFBaUQsQ0FBQztLQUMxSCxDQUFDO3FDQU1nQyxlQUFNO0dBTDNCLDBCQUEwQixDQXlCdEM7QUF6QlksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFZpZXdDaGlsZCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsUmFkTGlzdFZpZXd9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9saXN0dmlld1wiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCxTaWRlRHJhd2VyVHlwZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcbmltcG9ydCAqIGFzIEZyYW1lTW9kdWxlIGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiaG9sZGVyXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9zb2xpY2l0dWRlcy1ob2xkZXIvc29saWNpdHVkZXMtaG9sZGVyLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3NvbGljaXR1ZGVzLWhvbGRlci9zb2xpY2l0dWRlcy1ob2xkZXItY29tbW9uLmNzc1wiLFwicGFnZXMvc29saWNpdHVkZXMtaG9sZGVyL3NvbGljaXR1ZGVzLWhvbGRlci5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU29saWNpdHVkZXNIb2xkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgZHJhd2VyOlNpZGVEcmF3ZXJUeXBlXG5AVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpXG5wdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyKXtcbiAgICBcbiAgfVxuICBwdWJsaWMgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5kcmF3ZXI9dGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICB9XG5cblxuc29saWNpdHVkZXNMaXN0YSgpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zb2xpY2l0dWRlcy1saXN0YVwiXSlcbn1cbnB1YmxpYyBzaG93KCl7XG4gICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5wdWJsaWMgaG9tZSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc29saWNpdHVkZXMtbGlzdGFcIl0pXG4gICAgfVxucHVibGljIGRpcmVjY2lvbigpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGlyZWNjaW9uXCJdKVxuICAgIH1cbn0iXX0=