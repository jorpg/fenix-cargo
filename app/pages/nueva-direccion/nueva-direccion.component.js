"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var NuevaDireccionComponent = (function () {
    function NuevaDireccionComponent(router, page) {
        this.router = router;
        this.isChecked = false;
    }
    NuevaDireccionComponent.prototype.registrarse = function () {
        this.router.navigate(["/terminos"]);
    };
    NuevaDireccionComponent.prototype.direccion = function () {
        this.router.navigate(["/direccion"]);
    };
    return NuevaDireccionComponent;
}());
NuevaDireccionComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "pages/nueva-direccion/nueva-direccion.html",
        styleUrls: ["pages/nueva-direccion/nueva-direccion-common.css", "pages/nueva-direccion/nueva-direccion.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], NuevaDireccionComponent);
exports.NuevaDireccionComponent = NuevaDireccionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVldmEtZGlyZWNjaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm51ZXZhLWRpcmVjY2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUE4QjtBQU85QixJQUFhLHVCQUF1QjtJQUlsQyxpQ0FBb0IsTUFBZSxFQUFDLElBQVM7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUY1QixjQUFTLEdBQVksS0FBSyxDQUFDO0lBR2hDLENBQUM7SUFFTCw2Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFHRywyQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTCw4QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksdUJBQXVCO0lBTG5DLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUMsNENBQTRDO1FBQ3hELFNBQVMsRUFBRSxDQUFDLGtEQUFrRCxFQUFDLDJDQUEyQyxDQUFDO0tBQzVHLENBQUM7cUNBSzZCLGVBQU0sRUFBTSxXQUFJO0dBSmxDLHVCQUF1QixDQWdCbkM7QUFoQlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9udWV2YS1kaXJlY2Npb24vbnVldmEtZGlyZWNjaW9uLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9udWV2YS1kaXJlY2Npb24vbnVldmEtZGlyZWNjaW9uLWNvbW1vbi5jc3NcIixcInBhZ2VzL251ZXZhLWRpcmVjY2lvbi9udWV2YS1kaXJlY2Npb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE51ZXZhRGlyZWNjaW9uQ29tcG9uZW50IHtcbiAgXG4gIHB1YmxpYyBpc0NoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyLHBhZ2U6UGFnZSl7XG4gICAgfVxuXG5yZWdpc3RyYXJzZSgpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90ZXJtaW5vc1wiXSlcbn1cblxuIFxuICAgIGRpcmVjY2lvbigpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RpcmVjY2lvblwiXSk7ICBcbiAgICB9XG5cbn0iXX0=