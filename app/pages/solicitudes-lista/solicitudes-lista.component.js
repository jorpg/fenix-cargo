"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var Toast = require("nativescript-toast");
var list_item_component_1 = require("./list-item.component");
var SolicitudesListaComponent = (function () {
    function SolicitudesListaComponent(router) {
        this.router = router;
        this.items = [];
        this.counter = 0;
        for (var i = 0; i < 20; i++) {
            this.items.push(new list_item_component_1.ListItemComponent(this.router));
            this.counter = i;
        }
    }
    SolicitudesListaComponent.prototype.detallesItem = function () {
        this.router.navigate(["/detalles-item"]);
    };
    SolicitudesListaComponent.prototype.ngOnInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
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
    __metadata("design:paramtypes", [router_1.Router])
], SolicitudesListaComponent);
exports.SolicitudesListaComponent = SolicitudesListaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdHVkZXMtbGlzdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29saWNpdHVkZXMtbGlzdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELDBDQUF5QztBQUV6QyxzRUFBa0c7QUFJbEcsMENBQTRDO0FBQzVDLDZEQUF5RDtBQVF6RCxJQUFhLHlCQUF5QjtJQU90QyxtQ0FBb0IsTUFBZTtRQUFmLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBQyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQztRQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSx1Q0FBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO0lBRVIsQ0FBQztJQUVGLGdEQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUU3QyxDQUFDO0lBQ0EsNENBQVEsR0FBUjtRQUNPLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFFaEQsQ0FBQztJQUNNLHdDQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSx3Q0FBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLCtDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTSwwQ0FBTSxHQUFiO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTSxnREFBWSxHQUFuQjtRQUNJLEtBQUssQ0FBQyxRQUFRLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUV6RSxDQUFDO0lBRUwsZ0NBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBdENEO0lBREMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFDVixnQ0FBc0I7a0VBQUM7QUFObEMseUJBQXlCO0lBTHJDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsa0RBQWtEO1FBQy9ELFNBQVMsRUFBRSxDQUFDLHNEQUFzRCxFQUFDLCtDQUErQyxDQUFDO0tBQ3RILENBQUM7cUNBUTJCLGVBQU07R0FQdEIseUJBQXlCLENBNENyQztBQTVDWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0LFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSxSYWRMaXN0Vmlld30gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3XCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LFNpZGVEcmF3ZXJUeXBlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuaW1wb3J0ICogYXMgRnJhbWVNb2R1bGUgZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnR9IGZyb20gXCIuL2xpc3QtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiaG9sZGVyXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9zb2xpY2l0dWRlcy1saXN0YS9zb2xpY2l0dWRlcy1saXN0YS5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9zb2xpY2l0dWRlcy1saXN0YS9zb2xpY2l0dWRlcy1saXN0YS1jb21tb24uY3NzXCIsXCJwYWdlcy9zb2xpY2l0dWRlcy1saXN0YS9zb2xpY2l0dWRlcy1saXN0YS5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU29saWNpdHVkZXNMaXN0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGl0ZW1zOkFycmF5PExpc3RJdGVtQ29tcG9uZW50PjtcbiAgICBwcml2YXRlIGNvdW50ZXI6IG51bWJlcjtcbiAgICBwcml2YXRlIG1vZGFsOk1vZGFsRGlhbG9nU2VydmljZTtcbiAgICBwcml2YXRlIGRyYXdlcjpTaWRlRHJhd2VyVHlwZVxuQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KVxucHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbmNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyKXtcbiAgIHRoaXMuaXRlbXM9W107XG4gICB0aGlzLmNvdW50ZXI9MDtcbiAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5ldyBMaXN0SXRlbUNvbXBvbmVudCh0aGlzLnJvdXRlcikpO1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gaTtcbiAgICAgICAgfVxuICAgIFxuIH1cblxuZGV0YWxsZXNJdGVtKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RldGFsbGVzLWl0ZW1cIl0pO1xuXG59XG4gbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyPXRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgXG4gICAgfVxuICAgIHB1YmxpYyBzaG93KCl7XG4gICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaG9tZSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc29saWNpdHVkZXMtbGlzdGFcIl0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXJlY2Npb25lcygpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGlyZWNjaW9uXCJdKTtcbiAgICB9XG4gICAgcHVibGljIHBlcmZpbCAoKXtcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3BlcmZpbFwiXSk7XG4gICAgfVxuICAgIHB1YmxpYyBvbk1lbnVUYXBwZWQoKSB7XG4gICAgICAgIFRvYXN0Lm1ha2VUZXh0KFwidXN0ZWQgc2UgZW5jdWVudHJhIGVuIGxhIHZpc3RhIHNlbGVjY2lvbmFkYVwiKS5zaG93KCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbn0iXX0=