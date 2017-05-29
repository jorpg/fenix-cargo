"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var IngresarCodigoComponent = (function () {
    function IngresarCodigoComponent(router, page) {
        this.router = router;
        this.isLogginIn = true;
        page.actionBarHidden = true;
    }
    IngresarCodigoComponent.prototype.submit = function () {
        this.router.navigate(["/inicioSesion"]);
    };
    IngresarCodigoComponent.prototype.login = function () {
    };
    IngresarCodigoComponent.prototype.signUp = function () {
    };
    IngresarCodigoComponent.prototype.toggleDisplay = function () {
        this.isLogginIn = !this.isLogginIn;
    };
    IngresarCodigoComponent.prototype.forgot = function () {
    };
    return IngresarCodigoComponent;
}());
IngresarCodigoComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "pages/ingresarCodigo/ingresarCodigo.html",
        styleUrls: ["pages/ingresarCodigo/ingresarCodigo-common.css", "pages/ingresarCodigo/ingresarCodigo.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], IngresarCodigoComponent);
exports.IngresarCodigoComponent = IngresarCodigoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5ncmVzYXJDb2RpZ28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5ncmVzYXJDb2RpZ28uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxnQ0FBOEI7QUFNOUIsSUFBYSx1QkFBdUI7SUFJbEMsaUNBQW9CLE1BQWUsRUFBRyxJQUFTO1FBQTNCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFGbkMsZUFBVSxHQUFFLElBQUksQ0FBQztRQUdoQixJQUFJLENBQUMsZUFBZSxHQUFDLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsd0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBQ0QsdUNBQUssR0FBTDtJQUNFLENBQUM7SUFDSCx3Q0FBTSxHQUFOO0lBQ0UsQ0FBQztJQUNELCtDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsd0NBQU0sR0FBTjtJQUVBLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksdUJBQXVCO0lBTG5DLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUMsMENBQTBDO1FBQ3RELFNBQVMsRUFBRSxDQUFDLGdEQUFnRCxFQUFDLHlDQUF5QyxDQUFDO0tBQ3hHLENBQUM7cUNBSzZCLGVBQU0sRUFBUSxXQUFJO0dBSnBDLHVCQUF1QixDQXFCbkM7QUFyQlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOlwicGFnZXMvaW5ncmVzYXJDb2RpZ28vaW5ncmVzYXJDb2RpZ28uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2luZ3Jlc2FyQ29kaWdvL2luZ3Jlc2FyQ29kaWdvLWNvbW1vbi5jc3NcIixcInBhZ2VzL2luZ3Jlc2FyQ29kaWdvL2luZ3Jlc2FyQ29kaWdvLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBJbmdyZXNhckNvZGlnb0NvbXBvbmVudCB7XG4gIFxuICBpc0xvZ2dpbkluPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyICwgcGFnZTpQYWdlKXtcbiAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuPXRydWU7XG4gIH1cblxuICBzdWJtaXQoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaW5pY2lvU2VzaW9uXCJdKVxufVxubG9naW4oKXtcbiAgfVxuc2lnblVwKCl7XG4gIH1cbiAgdG9nZ2xlRGlzcGxheSgpe1xuICAgIHRoaXMuaXNMb2dnaW5JbiA9ICF0aGlzLmlzTG9nZ2luSW47XG4gIH1cbiAgZm9yZ290KCl7XG4gICAgXG4gIH1cbn0iXX0=