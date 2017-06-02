"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var direccion_service_1 = require("./direccion.service");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var Toast = require("nativescript-toast");
var SolicitudesListaComponent = (function () {
    function SolicitudesListaComponent(router, itemService) {
        this.router = router;
        this.itemService = itemService;
        this.items = this.itemService.getItems();
    }
    SolicitudesListaComponent.prototype.detallesItem = function () {
        this.router.navigate(["/detalles-item"]);
    };
    SolicitudesListaComponent.prototype.ngOnInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this.items = this.itemService.getItems();
    };
    SolicitudesListaComponent.prototype.show = function () {
        this.drawer.showDrawer();
    };
    SolicitudesListaComponent.prototype.home = function () {
        this.router.navigate(["/solicitudes-lista"]);
    };
    SolicitudesListaComponent.prototype.direcciones = function () {
        this.router.navigate(["/direccion"]);
    };
    SolicitudesListaComponent.prototype.perfil = function () {
        this.router.navigate(["/perfil"]);
    };
    SolicitudesListaComponent.prototype.onMenuTapped = function () {
        Toast.makeText("usted se encuentra en la vista seleccionada").show();
    };
    return SolicitudesListaComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], SolicitudesListaComponent.prototype, "drawerComponent", void 0);
SolicitudesListaComponent = __decorate([
    core_1.Component({
        selector: "holder",
        templateUrl: "./pages/solicitudes-lista/solicitudes-lista.html",
        styleUrls: ["pages/solicitudes-lista/solicitudes-lista-common.css", "pages/solicitudes-lista/solicitudes-lista.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, direccion_service_1.ItemService])
], SolicitudesListaComponent);
exports.SolicitudesListaComponent = SolicitudesListaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdHVkZXMtbGlzdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29saWNpdHVkZXMtbGlzdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELDBDQUF5QztBQUN6Qyx5REFBa0Q7QUFHbEQsc0VBQWtHO0FBSWxHLDBDQUE0QztBQU81QyxJQUFhLHlCQUF5QjtJQUtqQyxtQ0FBb0IsTUFBZSxFQUFTLFdBQXdCO1FBQWhELFdBQU0sR0FBTixNQUFNLENBQVM7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNyRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFNUMsQ0FBQztJQUVGLGdEQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUU3QyxDQUFDO0lBQ0EsNENBQVEsR0FBUjtRQUNPLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDTSx3Q0FBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sd0NBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSwrQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ00sMENBQU0sR0FBYjtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ00sZ0RBQVksR0FBbkI7UUFDSSxLQUFLLENBQUMsUUFBUSxDQUFDLDZDQUE2QyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFekUsQ0FBQztJQUVMLGdDQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQWpDRDtJQURDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQ1YsZ0NBQXNCO2tFQUFDO0FBSmxDLHlCQUF5QjtJQUxyQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLGtEQUFrRDtRQUMvRCxTQUFTLEVBQUUsQ0FBQyxzREFBc0QsRUFBQywrQ0FBK0MsQ0FBQztLQUN0SCxDQUFDO3FDQU1nQyxlQUFNLEVBQXNCLCtCQUFXO0dBTDVELHlCQUF5QixDQXFDckM7QUFyQ1ksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCxWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9kaXJlY2Npb24uc2VydmljZVwiO1xuaW1wb3J0IHtJdGVtfWZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLFJhZExpc3RWaWV3fSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXdcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsU2lkZURyYXdlclR5cGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBGcmFtZU1vZHVsZSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImhvbGRlclwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvc29saWNpdHVkZXMtbGlzdGEvc29saWNpdHVkZXMtbGlzdGEuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvc29saWNpdHVkZXMtbGlzdGEvc29saWNpdHVkZXMtbGlzdGEtY29tbW9uLmNzc1wiLFwicGFnZXMvc29saWNpdHVkZXMtbGlzdGEvc29saWNpdHVkZXMtbGlzdGEuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFNvbGljaXR1ZGVzTGlzdGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgICBpdGVtczogSXRlbVtdO1xuICAgICBwcml2YXRlIGRyYXdlcjpTaWRlRHJhd2VyVHlwZVxuQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KVxucHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIscHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2Upe1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgXG4gfVxuXG5kZXRhbGxlc0l0ZW0oKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWxsZXMtaXRlbVwiXSk7XG5cbn1cbiBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXI9dGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG4gICAgcHVibGljIHNob3coKXtcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBob21lKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zb2xpY2l0dWRlcy1saXN0YVwiXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRpcmVjY2lvbmVzKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9kaXJlY2Npb25cIl0pO1xuICAgIH1cbiAgICBwdWJsaWMgcGVyZmlsICgpe1xuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcGVyZmlsXCJdKTtcbiAgICB9XG4gICAgcHVibGljIG9uTWVudVRhcHBlZCgpIHtcbiAgICAgICAgVG9hc3QubWFrZVRleHQoXCJ1c3RlZCBzZSBlbmN1ZW50cmEgZW4gbGEgdmlzdGEgc2VsZWNjaW9uYWRhXCIpLnNob3coKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxufSJdfQ==