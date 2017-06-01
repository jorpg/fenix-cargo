"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var DetallesItemComponent = (function () {
    function DetallesItemComponent(router, page) {
        this.router = router;
    }
    DetallesItemComponent.prototype.guardar = function () {
        this.router.navigate(["/solicitudes-holder"]);
    };
    return DetallesItemComponent;
}());
DetallesItemComponent = __decorate([
    core_1.Component({
        selector: "perfil",
        templateUrl: "./pages/detalles-item/detalles-item.html",
        styleUrls: ["pages/detalles-item/detalles-item-common.css", "pages/detalles-item/detalles-item.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], DetallesItemComponent);
exports.DetallesItemComponent = DetallesItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxsZXMtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhbGxlcy1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsZ0NBQTZCO0FBTTdCLElBQWEscUJBQXFCO0lBRTdCLCtCQUFvQixNQUFlLEVBQUMsSUFBUztRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFTO0lBRXRDLENBQUM7SUFFSCx1Q0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUNELDRCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSxxQkFBcUI7SUFMakMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSwwQ0FBMEM7UUFDdkQsU0FBUyxFQUFFLENBQUMsOENBQThDLEVBQUMsdUNBQXVDLENBQUM7S0FDdEcsQ0FBQztxQ0FHZ0MsZUFBTSxFQUFNLFdBQUk7R0FGckMscUJBQXFCLENBU2pDO0FBVFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlfSBmcm9tIFwidWkvcGFnZVwiXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicGVyZmlsXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2RldGFsbGVzLWl0ZW0vZGV0YWxsZXMtaXRlbS5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2RldGFsbGVzLWl0ZW0vZGV0YWxsZXMtaXRlbS1jb21tb24uY3NzXCIsXCJwYWdlcy9kZXRhbGxlcy1pdGVtL2RldGFsbGVzLWl0ZW0uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhbGxlc0l0ZW1Db21wb25lbnQge1xyXG5cclxuICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlcixwYWdlOlBhZ2Upe1xyXG4gICAgXHJcbiAgfVxyXG5cclxuZ3VhcmRhcigpe1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NvbGljaXR1ZGVzLWhvbGRlclwiXSlcclxufVxyXG59Il19