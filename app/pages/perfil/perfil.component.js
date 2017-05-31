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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlcmZpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFDMUQsMENBQXlDO0FBQ3pDLGdDQUE2QjtBQUU3QixzRUFBa0c7QUFJbEcsMENBQTRDO0FBTzVDLElBQWEsZUFBZTtJQUt2Qix5QkFBb0IsTUFBZSxFQUFDLElBQVM7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBUztJQUV0QyxDQUFDO0lBQ00sa0NBQVEsR0FBZjtRQUNNLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDaEQsQ0FBQztJQUVMLGlDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBQ08sOEJBQUksR0FBWDtRQUNPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLHNDQUFZLEdBQW5CLFVBQW9CLEtBQVU7UUFDM0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUV6RCxDQUFDO0lBRU0sOEJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFTSxxQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBNUJEO0lBREMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFDVixnQ0FBc0I7d0RBQUM7QUFIbEMsZUFBZTtJQUwzQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBQyx5QkFBeUIsQ0FBQztLQUMxRSxDQUFDO3FDQU1nQyxlQUFNLEVBQU0sV0FBSTtHQUxyQyxlQUFlLENBK0IzQjtBQS9CWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxWaWV3Q2hpbGQsT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZX0gZnJvbSBcInVpL3BhZ2VcIlxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsUmFkTGlzdFZpZXd9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9saXN0dmlld1wiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCxTaWRlRHJhd2VyVHlwZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcbmltcG9ydCAqIGFzIEZyYW1lTW9kdWxlIGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicGVyZmlsXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9wZXJmaWwvcGVyZmlsLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3BlcmZpbC9wZXJmaWwtY29tbW9uLmNzc1wiLFwicGFnZXMvcGVyZmlsL3BlcmZpbC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUGVyZmlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbnByaXZhdGUgZHJhd2VyOlNpZGVEcmF3ZXJUeXBlXG5AVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpXG5wdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyLHBhZ2U6UGFnZSl7XG4gICAgXG4gIH1cbiAgcHVibGljIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuZHJhd2VyPXRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgfVxuXG5ndWFyZGFyKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NvbGljaXR1ZGVzLWhvbGRlclwiXSlcbn1cbiBwdWJsaWMgc2hvdygpe1xuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgIHB1YmxpYyBvbk1lbnVUYXBwZWQodmFsdWU6IGFueSkge1xuICAgICAgICBUb2FzdC5tYWtlVGV4dCh2YWx1ZSArIFwiIG1lbnUgaXRlbSBzZWxlY3RlZFwiKS5zaG93KCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBob21lKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zb2xpY2l0dWRlcy1saXN0YVwiXSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlyZWNjaW9uZXMoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RpcmVjY2lvblwiXSlcbiAgICB9XG59Il19