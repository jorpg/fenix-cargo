"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SolicitudesListaComponent = (function () {
    function SolicitudesListaComponent(router) {
        this.router = router;
    }
    SolicitudesListaComponent.prototype.detallesItem = function () {
        this.router.navigate(["/detalles-item"]);
    };
    return SolicitudesListaComponent;
}());
SolicitudesListaComponent = __decorate([
    core_1.Component({
        selector: "holder",
        templateUrl: "./pages/solicitudes-lista/solicitudes-lista.html",
        styleUrls: ["pages/solicitudes-lista/solicitudes-lista-common.css", "pages/solicitudes-lista/solicitudes-lista.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SolicitudesListaComponent);
exports.SolicitudesListaComponent = SolicitudesListaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdHVkZXMtbGlzdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29saWNpdHVkZXMtbGlzdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQU96QyxJQUFhLHlCQUF5QjtJQUNqQyxtQ0FBb0IsTUFBZTtRQUFmLFdBQU0sR0FBTixNQUFNLENBQVM7SUFDbkMsQ0FBQztJQUVOLGdEQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBQ0QsZ0NBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLHlCQUF5QjtJQUxyQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLGtEQUFrRDtRQUMvRCxTQUFTLEVBQUUsQ0FBQyxzREFBc0QsRUFBQywrQ0FBK0MsQ0FBQztLQUN0SCxDQUFDO3FDQUVnQyxlQUFNO0dBRDNCLHlCQUF5QixDQU9yQztBQVBZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImhvbGRlclwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvc29saWNpdHVkZXMtbGlzdGEvc29saWNpdHVkZXMtbGlzdGEuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvc29saWNpdHVkZXMtbGlzdGEvc29saWNpdHVkZXMtbGlzdGEtY29tbW9uLmNzc1wiLFwicGFnZXMvc29saWNpdHVkZXMtbGlzdGEvc29saWNpdHVkZXMtbGlzdGEuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFNvbGljaXR1ZGVzTGlzdGFDb21wb25lbnQge1xuICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlcil7XG4gICAgIH1cblxuZGV0YWxsZXNJdGVtKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RldGFsbGVzLWl0ZW1cIl0pXG59XG59Il19