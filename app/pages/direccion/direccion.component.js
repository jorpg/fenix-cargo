"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var DireccionComponent = (function () {
    function DireccionComponent(router) {
        this.router = router;
    }
    DireccionComponent.prototype.ngOnInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    DireccionComponent.prototype.show = function () {
        this.drawer.showDrawer();
    };
    DireccionComponent.prototype.home = function () {
        this.router.navigate(["/solicitudes-lista"]);
    };
    DireccionComponent.prototype.direcciones = function () {
        this.router.navigate(["/direccion"]);
    };
    DireccionComponent.prototype.perfil = function () {
        this.router.navigate(["/perfil"]);
    };
    return DireccionComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], DireccionComponent.prototype, "drawerComponent", void 0);
DireccionComponent = __decorate([
    core_1.Component({
        selector: "holder",
        templateUrl: "./pages/direccion/direccion.html",
        styleUrls: ["pages/direccion/direccion-common.css", "pages/direccion/direccion.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], DireccionComponent);
exports.DireccionComponent = DireccionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWNjaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpcmVjY2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsMENBQXlDO0FBRXpDLHNFQUFrRztBQVdsRyxJQUFhLGtCQUFrQjtJQUsxQiw0QkFBb0IsTUFBZTtRQUFmLFdBQU0sR0FBTixNQUFNLENBQVM7SUFFdkMsQ0FBQztJQUNLLHFDQUFRLEdBQWY7UUFDUSxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2hELENBQUM7SUFDRSxpQ0FBSSxHQUFYO1FBQ1EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0UsaUNBQUksR0FBWDtRQUNRLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFRSx3Q0FBVyxHQUFsQjtRQUNRLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBQ0UsbUNBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBRUQseUJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDO0FBckJEO0lBREMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFDVixnQ0FBc0I7MkRBQUM7QUFKbEMsa0JBQWtCO0lBTDlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxFQUFDLCtCQUErQixDQUFDO0tBQ3RGLENBQUM7cUNBTWdDLGVBQU07R0FMM0Isa0JBQWtCLENBeUI5QjtBQXpCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsVmlld0NoaWxkLE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSxSYWRMaXN0Vmlld30gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3XCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LFNpZGVEcmF3ZXJUeXBlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuaW1wb3J0ICogYXMgRnJhbWVNb2R1bGUgZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJob2xkZXJcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2RpcmVjY2lvbi9kaXJlY2Npb24uaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvZGlyZWNjaW9uL2RpcmVjY2lvbi1jb21tb24uY3NzXCIsXCJwYWdlcy9kaXJlY2Npb24vZGlyZWNjaW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBEaXJlY2Npb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xucHJpdmF0ZSBkcmF3ZXI6U2lkZURyYXdlclR5cGVcblxuQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KVxucHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIpe1xuICAgICAgICAgIFxuIH1cbnB1YmxpYyBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLmRyYXdlcj10aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgIH1cbnB1YmxpYyBzaG93KCl7XG4gICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5wdWJsaWMgaG9tZSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc29saWNpdHVkZXMtbGlzdGFcIl0pXG4gICAgfVxuXG5wdWJsaWMgZGlyZWNjaW9uZXMoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RpcmVjY2lvblwiXSlcbiAgICB9XG5wdWJsaWMgcGVyZmlsKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3BlcmZpbFwiXSlcbn1cblxufSJdfQ==