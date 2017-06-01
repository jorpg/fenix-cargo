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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVldmEtZGlyZWNjaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm51ZXZhLWRpcmVjY2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUE4QjtBQU85QixJQUFhLHVCQUF1QjtJQUlsQyxpQ0FBb0IsTUFBZSxFQUFDLElBQVM7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUY1QixjQUFTLEdBQVksS0FBSyxDQUFDO0lBR2hDLENBQUM7SUFFTCw2Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFHRywyQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTCw4QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksdUJBQXVCO0lBTG5DLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUMsNENBQTRDO1FBQ3hELFNBQVMsRUFBRSxDQUFDLGtEQUFrRCxFQUFDLDJDQUEyQyxDQUFDO0tBQzVHLENBQUM7cUNBSzZCLGVBQU0sRUFBTSxXQUFJO0dBSmxDLHVCQUF1QixDQWdCbkM7QUFoQlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9udWV2YS1kaXJlY2Npb24vbnVldmEtZGlyZWNjaW9uLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL251ZXZhLWRpcmVjY2lvbi9udWV2YS1kaXJlY2Npb24tY29tbW9uLmNzc1wiLFwicGFnZXMvbnVldmEtZGlyZWNjaW9uL251ZXZhLWRpcmVjY2lvbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51ZXZhRGlyZWNjaW9uQ29tcG9uZW50IHtcclxuICBcclxuICBwdWJsaWMgaXNDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIscGFnZTpQYWdlKXtcclxuICAgIH1cclxuXHJcbnJlZ2lzdHJhcnNlKCl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdGVybWlub3NcIl0pXHJcbn1cclxuXHJcbiBcclxuICAgIGRpcmVjY2lvbigpe1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGlyZWNjaW9uXCJdKTsgIFxyXG4gICAgfVxyXG5cclxufSJdfQ==