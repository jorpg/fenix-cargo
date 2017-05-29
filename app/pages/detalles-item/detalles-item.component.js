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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWxsZXMtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhbGxlcy1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsZ0NBQTZCO0FBTTdCLElBQWEscUJBQXFCO0lBRTdCLCtCQUFvQixNQUFlLEVBQUMsSUFBUztRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFTO0lBRXRDLENBQUM7SUFFSCx1Q0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUNELDRCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSxxQkFBcUI7SUFMakMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSwwQ0FBMEM7UUFDdkQsU0FBUyxFQUFFLENBQUMsOENBQThDLEVBQUMsdUNBQXVDLENBQUM7S0FDdEcsQ0FBQztxQ0FHZ0MsZUFBTSxFQUFNLFdBQUk7R0FGckMscUJBQXFCLENBU2pDO0FBVFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2V9IGZyb20gXCJ1aS9wYWdlXCJcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInBlcmZpbFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvZGV0YWxsZXMtaXRlbS9kZXRhbGxlcy1pdGVtLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2RldGFsbGVzLWl0ZW0vZGV0YWxsZXMtaXRlbS1jb21tb24uY3NzXCIsXCJwYWdlcy9kZXRhbGxlcy1pdGVtL2RldGFsbGVzLWl0ZW0uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIERldGFsbGVzSXRlbUNvbXBvbmVudCB7XG5cbiAgICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIscGFnZTpQYWdlKXtcbiAgICBcbiAgfVxuXG5ndWFyZGFyKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NvbGljaXR1ZGVzLWhvbGRlclwiXSlcbn1cbn0iXX0=