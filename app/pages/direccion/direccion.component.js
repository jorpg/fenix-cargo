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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWNjaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpcmVjY2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsMENBQXlDO0FBRXpDLHNFQUFrRztBQVdsRyxJQUFhLGtCQUFrQjtJQUsxQiw0QkFBb0IsTUFBZTtRQUFmLFdBQU0sR0FBTixNQUFNLENBQVM7SUFFdkMsQ0FBQztJQUNLLHFDQUFRLEdBQWY7UUFDUSxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2hELENBQUM7SUFDRSxpQ0FBSSxHQUFYO1FBQ1EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0UsaUNBQUksR0FBWDtRQUNRLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFRSx3Q0FBVyxHQUFsQjtRQUNRLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBQ0UsbUNBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBRUQseUJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDO0FBckJEO0lBREMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFDVixnQ0FBc0I7MkRBQUM7QUFKbEMsa0JBQWtCO0lBTDlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxFQUFDLCtCQUErQixDQUFDO0tBQ3RGLENBQUM7cUNBTWdDLGVBQU07R0FMM0Isa0JBQWtCLENBeUI5QjtBQXpCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsVmlld0NoaWxkLE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsUmFkTGlzdFZpZXd9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9saXN0dmlld1wiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LFNpZGVEcmF3ZXJUeXBlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgRnJhbWVNb2R1bGUgZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImhvbGRlclwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9kaXJlY2Npb24vZGlyZWNjaW9uLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvZGlyZWNjaW9uL2RpcmVjY2lvbi1jb21tb24uY3NzXCIsXCJwYWdlcy9kaXJlY2Npb24vZGlyZWNjaW9uLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlyZWNjaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxucHJpdmF0ZSBkcmF3ZXI6U2lkZURyYXdlclR5cGVcclxuXHJcbkBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudClcclxucHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlcil7XHJcbiAgICAgICAgICBcclxuIH1cclxucHVibGljIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXI9dGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcclxuICAgIH1cclxucHVibGljIHNob3coKXtcclxuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbnB1YmxpYyBob21lKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NvbGljaXR1ZGVzLWxpc3RhXCJdKVxyXG4gICAgfVxyXG5cclxucHVibGljIGRpcmVjY2lvbmVzKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RpcmVjY2lvblwiXSlcclxuICAgIH1cclxucHVibGljIHBlcmZpbCgpe1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3BlcmZpbFwiXSlcclxufVxyXG5cclxufSJdfQ==