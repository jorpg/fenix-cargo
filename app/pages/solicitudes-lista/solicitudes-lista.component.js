"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var direccion_service_1 = require("./direccion.service");
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
        this.items = this.itemService.getItems();
    };
    return SolicitudesListaComponent;
}());
SolicitudesListaComponent = __decorate([
    core_1.Component({
        selector: "holder",
        templateUrl: "./pages/solicitudes-lista/solicitudes-lista.html",
        styleUrls: ["pages/solicitudes-lista/solicitudes-lista-common.css", "pages/solicitudes-lista/solicitudes-lista.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, direccion_service_1.ItemService])
], SolicitudesListaComponent);
exports.SolicitudesListaComponent = SolicitudesListaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdHVkZXMtbGlzdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29saWNpdHVkZXMtbGlzdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDBDQUF5QztBQUN6Qyx5REFBa0Q7QUFPbEQsSUFBYSx5QkFBeUI7SUFFakMsbUNBQW9CLE1BQWUsRUFBUyxXQUF3QjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDckUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRixnREFBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUNBLDRDQUFRLEdBQVI7UUFDTyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUNMLGdDQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSx5QkFBeUI7SUFMckMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxrREFBa0Q7UUFDL0QsU0FBUyxFQUFFLENBQUMsc0RBQXNELEVBQUMsK0NBQStDLENBQUM7S0FDdEgsQ0FBQztxQ0FHZ0MsZUFBTSxFQUFzQiwrQkFBVztHQUY1RCx5QkFBeUIsQ0FZckM7QUFaWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vZGlyZWNjaW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7SXRlbX1mcm9tIFwiLi9pdGVtXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJob2xkZXJcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3NvbGljaXR1ZGVzLWxpc3RhL3NvbGljaXR1ZGVzLWxpc3RhLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3NvbGljaXR1ZGVzLWxpc3RhL3NvbGljaXR1ZGVzLWxpc3RhLWNvbW1vbi5jc3NcIixcInBhZ2VzL3NvbGljaXR1ZGVzLWxpc3RhL3NvbGljaXR1ZGVzLWxpc3RhLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBTb2xpY2l0dWRlc0xpc3RhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAgaXRlbXM6IEl0ZW1bXTtcbiAgICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIscHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2Upe1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gfVxuXG5kZXRhbGxlc0l0ZW0oKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWxsZXMtaXRlbVwiXSlcbn1cbiBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG59Il19