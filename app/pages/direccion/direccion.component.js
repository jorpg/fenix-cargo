"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var direccion_item_component_1 = require("./direccion-item.component");
var DireccionComponent = (function () {
    function DireccionComponent(router) {
        this.router = router;
        this.items = [];
        this.counter = 0;
        for (var i = 0; i < 20; i++) {
            this.items.push(new direccion_item_component_1.DireccionItemComponent(this.router, this.modal));
            this.counter = i;
        }
    }
    DireccionComponent.prototype.ngOnInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    DireccionComponent.prototype.show = function () {
        this.drawer.showDrawer();
    };
    DireccionComponent.prototype.home = function () {
        this.router.navigate(["/solicitudes-lista"]);
    };
    DireccionComponent.prototype.direcciones = function () {
        this.router.navigate(["/direccion"]);
    };
    DireccionComponent.prototype.perfil = function () {
        this.router.navigate(["/perfil"]);
    };
    return DireccionComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], DireccionComponent.prototype, "drawerComponent", void 0);
DireccionComponent = __decorate([
    core_1.Component({
        selector: "holder",
        templateUrl: "./pages/direccion/direccion.html",
        styleUrls: ["pages/direccion/direccion-common.css", "pages/direccion/direccion.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], DireccionComponent);
exports.DireccionComponent = DireccionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWNjaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpcmVjY2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsMENBQXlDO0FBRXpDLHNFQUFrRztBQUtsRyx1RUFBbUU7QUFPbkUsSUFBYSxrQkFBa0I7SUFPMUIsNEJBQW9CLE1BQWU7UUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxpREFBc0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFFUixDQUFDO0lBQ0sscUNBQVEsR0FBZjtRQUNRLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDaEQsQ0FBQztJQUNFLGlDQUFJLEdBQVg7UUFDUSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDRSxpQ0FBSSxHQUFYO1FBQ1EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVFLHdDQUFXLEdBQWxCO1FBQ1EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDRSxtQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFFRCx5QkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUEzQkQ7SUFEQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUNWLGdDQUFzQjsyREFBQztBQU5sQyxrQkFBa0I7SUFMOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxrQ0FBa0M7UUFDL0MsU0FBUyxFQUFFLENBQUMsc0NBQXNDLEVBQUMsK0JBQStCLENBQUM7S0FDdEYsQ0FBQztxQ0FRZ0MsZUFBTTtHQVAzQixrQkFBa0IsQ0FpQzlCO0FBakNZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxWaWV3Q2hpbGQsT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSxSYWRMaXN0Vmlld30gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3XCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsU2lkZURyYXdlclR5cGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3VpL2NvcmUvdmlldyc7XHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgKiBhcyBGcmFtZU1vZHVsZSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcclxuaW1wb3J0IHsgRGlyZWNjaW9uSXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vZGlyZWNjaW9uLWl0ZW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJob2xkZXJcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvZGlyZWNjaW9uL2RpcmVjY2lvbi5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2RpcmVjY2lvbi9kaXJlY2Npb24tY29tbW9uLmNzc1wiLFwicGFnZXMvZGlyZWNjaW9uL2RpcmVjY2lvbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpcmVjY2lvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbnByaXZhdGUgZHJhd2VyOlNpZGVEcmF3ZXJUeXBlXHJcbnB1YmxpYyAgaXRlbXM6IEFycmF5PERpcmVjY2lvbkl0ZW1Db21wb25lbnQ+O1xyXG5wcml2YXRlIGNvdW50ZXI6IG51bWJlcjtcclxucHJpdmF0ZSBtb2RhbDpNb2RhbERpYWxvZ1NlcnZpY2U7XHJcbkBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudClcclxucHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlcil7XHJcbiAgICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDIwOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5ldyBEaXJlY2Npb25JdGVtQ29tcG9uZW50KHRoaXMucm91dGVyLHRoaXMubW9kYWwpKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICBcclxuIH1cclxucHVibGljIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXI9dGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcclxuICAgIH1cclxucHVibGljIHNob3coKXtcclxuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbnB1YmxpYyBob21lKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NvbGljaXR1ZGVzLWxpc3RhXCJdKVxyXG4gICAgfVxyXG5cclxucHVibGljIGRpcmVjY2lvbmVzKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RpcmVjY2lvblwiXSlcclxuICAgIH1cclxucHVibGljIHBlcmZpbCgpe1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3BlcmZpbFwiXSlcclxufVxyXG5cclxufSJdfQ==