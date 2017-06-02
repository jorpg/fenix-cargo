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
    PerfilComponent.prototype.onMenuTapped = function (value) {
        Toast.makeText(value + " menu item selected").show();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlcmZpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFDMUQsMENBQXlDO0FBQ3pDLGdDQUE2QjtBQUU3QixzRUFBa0c7QUFJbEcsMENBQTRDO0FBTzVDLElBQWEsZUFBZTtJQUt2Qix5QkFBb0IsTUFBZSxFQUFDLElBQVM7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBUztJQUV0QyxDQUFDO0lBQ00sa0NBQVEsR0FBZjtRQUNNLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDaEQsQ0FBQztJQUVMLGlDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBQ08sOEJBQUksR0FBWDtRQUNPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLHNDQUFZLEdBQW5CLFVBQW9CLEtBQVU7UUFDM0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUV6RCxDQUFDO0lBRU0sOEJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFTSxxQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBNUJEO0lBREMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFDVixnQ0FBc0I7d0RBQUM7QUFIbEMsZUFBZTtJQUwzQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBQyx5QkFBeUIsQ0FBQztLQUMxRSxDQUFDO3FDQU1nQyxlQUFNLEVBQU0sV0FBSTtHQUxyQyxlQUFlLENBK0IzQjtBQS9CWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxWaWV3Q2hpbGQsT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2V9IGZyb20gXCJ1aS9wYWdlXCJcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsUmFkTGlzdFZpZXd9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9saXN0dmlld1wiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LFNpZGVEcmF3ZXJUeXBlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgRnJhbWVNb2R1bGUgZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInBlcmZpbFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9wZXJmaWwvcGVyZmlsLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvcGVyZmlsL3BlcmZpbC1jb21tb24uY3NzXCIsXCJwYWdlcy9wZXJmaWwvcGVyZmlsLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVyZmlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxucHJpdmF0ZSBkcmF3ZXI6U2lkZURyYXdlclR5cGVcclxuQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KVxyXG5wdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG5cclxuICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlcixwYWdlOlBhZ2Upe1xyXG4gICAgXHJcbiAgfVxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuZHJhd2VyPXRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICB9XHJcblxyXG5ndWFyZGFyKCl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc29saWNpdHVkZXMtaG9sZGVyXCJdKVxyXG59XHJcbiBwdWJsaWMgc2hvdygpe1xyXG4gICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAgcHVibGljIG9uTWVudVRhcHBlZCh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgVG9hc3QubWFrZVRleHQodmFsdWUgKyBcIiBtZW51IGl0ZW0gc2VsZWN0ZWRcIikuc2hvdygpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBob21lKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NvbGljaXR1ZGVzLWxpc3RhXCJdKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXJlY2Npb25lcygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9kaXJlY2Npb25cIl0pXHJcbiAgICB9XHJcbn0iXX0=