"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SolicitudesHolderComponent = (function () {
    function SolicitudesHolderComponent(router) {
        this.router = router;
    }
    SolicitudesHolderComponent.prototype.solicitudesLista = function () {
        this.router.navigate(["/solicitudes-lista"]);
    };
    return SolicitudesHolderComponent;
}());
SolicitudesHolderComponent = __decorate([
    core_1.Component({
        selector: "holder",
        templateUrl: "./pages/solicitudes-holder/solicitudes-holder.html",
        styleUrls: ["pages/solicitudes-holder/solicitudes-holder-common.css", "pages/solicitudes-holder/solicitudes-holder.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SolicitudesHolderComponent);
exports.SolicitudesHolderComponent = SolicitudesHolderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWNpdHVkZXMtaG9sZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbGljaXR1ZGVzLWhvbGRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBT3pDLElBQWEsMEJBQTBCO0lBQ2xDLG9DQUFvQixNQUFlO1FBQWYsV0FBTSxHQUFOLE1BQU0sQ0FBUztJQUNuQyxDQUFDO0lBRU4scURBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUNELGlDQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSwwQkFBMEI7SUFMdEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxvREFBb0Q7UUFDakUsU0FBUyxFQUFFLENBQUMsd0RBQXdELEVBQUMsaURBQWlELENBQUM7S0FDMUgsQ0FBQztxQ0FFZ0MsZUFBTTtHQUQzQiwwQkFBMEIsQ0FPdEM7QUFQWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJob2xkZXJcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3NvbGljaXR1ZGVzLWhvbGRlci9zb2xpY2l0dWRlcy1ob2xkZXIuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvc29saWNpdHVkZXMtaG9sZGVyL3NvbGljaXR1ZGVzLWhvbGRlci1jb21tb24uY3NzXCIsXCJwYWdlcy9zb2xpY2l0dWRlcy1ob2xkZXIvc29saWNpdHVkZXMtaG9sZGVyLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBTb2xpY2l0dWRlc0hvbGRlckNvbXBvbmVudCB7XG4gICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyKXtcbiAgICAgfVxuXG5zb2xpY2l0dWRlc0xpc3RhKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NvbGljaXR1ZGVzLWxpc3RhXCJdKVxufVxufSJdfQ==