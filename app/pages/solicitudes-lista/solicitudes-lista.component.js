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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdHVkZXMtbGlzdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29saWNpdHVkZXMtbGlzdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDBDQUF5QztBQUN6Qyx5REFBa0Q7QUFPbEQsSUFBYSx5QkFBeUI7SUFFakMsbUNBQW9CLE1BQWUsRUFBUyxXQUF3QjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDckUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRixnREFBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUNBLDRDQUFRLEdBQVI7UUFDTyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUNMLGdDQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSx5QkFBeUI7SUFMckMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxrREFBa0Q7UUFDL0QsU0FBUyxFQUFFLENBQUMsc0RBQXNELEVBQUMsK0NBQStDLENBQUM7S0FDdEgsQ0FBQztxQ0FHZ0MsZUFBTSxFQUFzQiwrQkFBVztHQUY1RCx5QkFBeUIsQ0FZckM7QUFaWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2RpcmVjY2lvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SXRlbX1mcm9tIFwiLi9pdGVtXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaG9sZGVyXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3NvbGljaXR1ZGVzLWxpc3RhL3NvbGljaXR1ZGVzLWxpc3RhLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvc29saWNpdHVkZXMtbGlzdGEvc29saWNpdHVkZXMtbGlzdGEtY29tbW9uLmNzc1wiLFwicGFnZXMvc29saWNpdHVkZXMtbGlzdGEvc29saWNpdHVkZXMtbGlzdGEuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb2xpY2l0dWRlc0xpc3RhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgICBpdGVtczogSXRlbVtdO1xyXG4gICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyLHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlKXtcclxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XHJcbiB9XHJcblxyXG5kZXRhbGxlc0l0ZW0oKXtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9kZXRhbGxlcy1pdGVtXCJdKVxyXG59XHJcbiBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xyXG4gICAgfVxyXG59Il19