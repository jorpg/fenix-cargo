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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWNjaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpcmVjY2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsMENBQXlDO0FBRXpDLHNFQUFrRztBQUtsRyx1RUFBbUU7QUFPbkUsSUFBYSxrQkFBa0I7SUFPMUIsNEJBQW9CLE1BQWU7UUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxpREFBc0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFFUixDQUFDO0lBQ0sscUNBQVEsR0FBZjtRQUNRLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDaEQsQ0FBQztJQUNFLGlDQUFJLEdBQVg7UUFDUSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDRSxpQ0FBSSxHQUFYO1FBQ1EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVFLHdDQUFXLEdBQWxCO1FBQ1EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDRSxtQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFFRCx5QkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUEzQkQ7SUFEQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUNWLGdDQUFzQjsyREFBQztBQU5sQyxrQkFBa0I7SUFMOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxrQ0FBa0M7UUFDL0MsU0FBUyxFQUFFLENBQUMsc0NBQXNDLEVBQUMsK0JBQStCLENBQUM7S0FDdEYsQ0FBQztxQ0FRZ0MsZUFBTTtHQVAzQixrQkFBa0IsQ0FpQzlCO0FBakNZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxWaWV3Q2hpbGQsT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLFJhZExpc3RWaWV3fSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXdcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsU2lkZURyYXdlclR5cGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBGcmFtZU1vZHVsZSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCc7XG5pbXBvcnQgeyBEaXJlY2Npb25JdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9kaXJlY2Npb24taXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImhvbGRlclwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvZGlyZWNjaW9uL2RpcmVjY2lvbi5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9kaXJlY2Npb24vZGlyZWNjaW9uLWNvbW1vbi5jc3NcIixcInBhZ2VzL2RpcmVjY2lvbi9kaXJlY2Npb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIERpcmVjY2lvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5wcml2YXRlIGRyYXdlcjpTaWRlRHJhd2VyVHlwZVxucHVibGljICBpdGVtczogQXJyYXk8RGlyZWNjaW9uSXRlbUNvbXBvbmVudD47XG5wcml2YXRlIGNvdW50ZXI6IG51bWJlcjtcbnByaXZhdGUgbW9kYWw6TW9kYWxEaWFsb2dTZXJ2aWNlO1xuQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KVxucHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIpe1xuICAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2gobmV3IERpcmVjY2lvbkl0ZW1Db21wb25lbnQodGhpcy5yb3V0ZXIsdGhpcy5tb2RhbCkpO1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gaTtcbiAgICAgICAgfVxuICAgICAgICAgIFxuIH1cbnB1YmxpYyBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLmRyYXdlcj10aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgIH1cbnB1YmxpYyBzaG93KCl7XG4gICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5wdWJsaWMgaG9tZSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc29saWNpdHVkZXMtbGlzdGFcIl0pXG4gICAgfVxuXG5wdWJsaWMgZGlyZWNjaW9uZXMoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RpcmVjY2lvblwiXSlcbiAgICB9XG5wdWJsaWMgcGVyZmlsKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3BlcmZpbFwiXSlcbn1cblxufSJdfQ==