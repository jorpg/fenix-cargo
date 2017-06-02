"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var Toast = require("nativescript-toast");
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
    SolicitudesHolderComponent.prototype.perfil = function () {
        this.router.navigate(["/perfil"]);
    };
    SolicitudesHolderComponent.prototype.onMenuTapped = function () {
        Toast.makeText("usted se encuentra en la vista seleccionada").show();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdHVkZXMtaG9sZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXR1ZGVzLWhvbGRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsMENBQXlDO0FBRXpDLHNFQUFrRztBQUlsRywwQ0FBNEM7QUFPNUMsSUFBYSwwQkFBMEI7SUFLbEMsb0NBQW9CLE1BQWU7UUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO0lBRXRDLENBQUM7SUFDTSw2Q0FBUSxHQUFmO1FBQ00sSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNoRCxDQUFDO0lBR0wscURBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUNNLHlDQUFJLEdBQVg7UUFDUSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDRSx5Q0FBSSxHQUFYO1FBQ1EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNFLDhDQUFTLEdBQWhCO1FBQ1EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRSwyQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDVSxpREFBWSxHQUFuQjtRQUNJLEtBQUssQ0FBQyxRQUFRLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUV6RSxDQUFDO0lBQ0wsaUNBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBN0JEO0lBREMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFDVixnQ0FBc0I7bUVBQUM7QUFIbEMsMEJBQTBCO0lBTHRDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0RBQW9EO1FBQ2pFLFNBQVMsRUFBRSxDQUFDLHdEQUF3RCxFQUFDLGlEQUFpRCxDQUFDO0tBQzFILENBQUM7cUNBTWdDLGVBQU07R0FMM0IsMEJBQTBCLENBZ0N0QztBQWhDWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsVmlld0NoaWxkLE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSxSYWRMaXN0Vmlld30gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3XCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LFNpZGVEcmF3ZXJUeXBlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuaW1wb3J0ICogYXMgRnJhbWVNb2R1bGUgZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJob2xkZXJcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3NvbGljaXR1ZGVzLWhvbGRlci9zb2xpY2l0dWRlcy1ob2xkZXIuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvc29saWNpdHVkZXMtaG9sZGVyL3NvbGljaXR1ZGVzLWhvbGRlci1jb21tb24uY3NzXCIsXCJwYWdlcy9zb2xpY2l0dWRlcy1ob2xkZXIvc29saWNpdHVkZXMtaG9sZGVyLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBTb2xpY2l0dWRlc0hvbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBkcmF3ZXI6U2lkZURyYXdlclR5cGVcbkBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudClcbnB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIpe1xuICAgIFxuICB9XG4gIHB1YmxpYyBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLmRyYXdlcj10aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgIH1cblxuXG5zb2xpY2l0dWRlc0xpc3RhKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NvbGljaXR1ZGVzLWxpc3RhXCJdKVxufVxucHVibGljIHNob3coKXtcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbnB1YmxpYyBob21lKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zb2xpY2l0dWRlcy1saXN0YVwiXSk7XG4gICAgfVxucHVibGljIGRpcmVjY2lvbigpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGlyZWNjaW9uXCJdKTtcbiAgICB9XG5wdWJsaWMgcGVyZmlsKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3BlcmZpbFwiXSk7XG59ICAgIFxuICAgIHB1YmxpYyBvbk1lbnVUYXBwZWQoKSB7XG4gICAgICAgIFRvYXN0Lm1ha2VUZXh0KFwidXN0ZWQgc2UgZW5jdWVudHJhIGVuIGxhIHZpc3RhIHNlbGVjY2lvbmFkYVwiKS5zaG93KCk7XG4gICAgICAgIFxuICAgIH1cbn0iXX0=