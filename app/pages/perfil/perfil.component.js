"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var Toast = require("nativescript-toast");
var PerfilComponent = (function () {
    function PerfilComponent(router, page) {
        this.router = router;
    }
    PerfilComponent.prototype.ngOnInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    PerfilComponent.prototype.guardar = function () {
        this.router.navigate(["/solicitudes-holder"]);
    };
    PerfilComponent.prototype.show = function () {
        this.drawer.showDrawer();
    };
    PerfilComponent.prototype.onMenuTapped = function () {
        Toast.makeText("usted se encuentra en la vista seleccionada").show();
    };
    PerfilComponent.prototype.home = function () {
        this.router.navigate(["/solicitudes-lista"]);
    };
    PerfilComponent.prototype.direcciones = function () {
        this.router.navigate(["/direccion"]);
    };
    return PerfilComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], PerfilComponent.prototype, "drawerComponent", void 0);
PerfilComponent = __decorate([
    core_1.Component({
        selector: "perfil",
        templateUrl: "./pages/perfil/perfil.html",
        styleUrls: ["pages/perfil/perfil-common.css", "pages/perfil/perfil.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], PerfilComponent);
exports.PerfilComponent = PerfilComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlcmZpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFDMUQsMENBQXlDO0FBQ3pDLGdDQUE2QjtBQUU3QixzRUFBa0c7QUFJbEcsMENBQTRDO0FBTzVDLElBQWEsZUFBZTtJQUt2Qix5QkFBb0IsTUFBZSxFQUFDLElBQVM7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBUztJQUV0QyxDQUFDO0lBQ00sa0NBQVEsR0FBZjtRQUNNLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDaEQsQ0FBQztJQUVMLGlDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBQ08sOEJBQUksR0FBWDtRQUNPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLHNDQUFZLEdBQW5CO1FBQ0csS0FBSyxDQUFDLFFBQVEsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRXpFLENBQUM7SUFFTSw4QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVNLHFDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUE1QkQ7SUFEQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUNWLGdDQUFzQjt3REFBQztBQUhsQyxlQUFlO0lBTDNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxFQUFDLHlCQUF5QixDQUFDO0tBQzFFLENBQUM7cUNBTWdDLGVBQU0sRUFBTSxXQUFJO0dBTHJDLGVBQWUsQ0ErQjNCO0FBL0JZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFZpZXdDaGlsZCxPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlfSBmcm9tIFwidWkvcGFnZVwiXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSxSYWRMaXN0Vmlld30gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3XCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LFNpZGVEcmF3ZXJUeXBlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuaW1wb3J0ICogYXMgRnJhbWVNb2R1bGUgZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJwZXJmaWxcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3BlcmZpbC9wZXJmaWwuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvcGVyZmlsL3BlcmZpbC1jb21tb24uY3NzXCIsXCJwYWdlcy9wZXJmaWwvcGVyZmlsLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBQZXJmaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xucHJpdmF0ZSBkcmF3ZXI6U2lkZURyYXdlclR5cGVcbkBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudClcbnB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIscGFnZTpQYWdlKXtcbiAgICBcbiAgfVxuICBwdWJsaWMgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5kcmF3ZXI9dGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICB9XG5cbmd1YXJkYXIoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc29saWNpdHVkZXMtaG9sZGVyXCJdKVxufVxuIHB1YmxpYyBzaG93KCl7XG4gICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICAgcHVibGljIG9uTWVudVRhcHBlZCgpIHtcbiAgICAgICAgVG9hc3QubWFrZVRleHQoXCJ1c3RlZCBzZSBlbmN1ZW50cmEgZW4gbGEgdmlzdGEgc2VsZWNjaW9uYWRhXCIpLnNob3coKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIGhvbWUoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NvbGljaXR1ZGVzLWxpc3RhXCJdKVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXJlY2Npb25lcygpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGlyZWNjaW9uXCJdKVxuICAgIH1cbn0iXX0=