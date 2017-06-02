"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var RegistrarseComponent = (function () {
    function RegistrarseComponent(router, page) {
        this.router = router;
        this.isLogginIn = true;
        page.actionBarHidden = true;
    }
    RegistrarseComponent.prototype.registrarse = function () {
        this.router.navigate(["/terminos"]);
    };
    return RegistrarseComponent;
}());
RegistrarseComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "pages/registrarse/registrarse.html",
        styleUrls: ["pages/registrarse/registrarse-common.css", "pages/registrarse/registrarse.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], RegistrarseComponent);
exports.RegistrarseComponent = RegistrarseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmFyc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0cmFyc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxnQ0FBOEI7QUFPOUIsSUFBYSxvQkFBb0I7SUFHL0IsOEJBQW9CLE1BQWUsRUFBQyxJQUFTO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFEbkMsZUFBVSxHQUFFLElBQUksQ0FBQztRQUVmLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFSCwyQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksb0JBQW9CO0lBTGhDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUMsb0NBQW9DO1FBQ2hELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxFQUFDLG1DQUFtQyxDQUFDO0tBQzVGLENBQUM7cUNBSTZCLGVBQU0sRUFBTSxXQUFJO0dBSGxDLG9CQUFvQixDQVdoQztBQVhZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9yZWdpc3RyYXJzZS9yZWdpc3RyYXJzZS5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9yZWdpc3RyYXJzZS9yZWdpc3RyYXJzZS1jb21tb24uY3NzXCIsXCJwYWdlcy9yZWdpc3RyYXJzZS9yZWdpc3RyYXJzZS5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJhcnNlQ29tcG9uZW50IHtcclxuICBcclxuICBpc0xvZ2dpbkluPSB0cnVlO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyLHBhZ2U6UGFnZSl7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICByZWdpc3RyYXJzZSgpe1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdGVybWlub3NcIl0pXHJcbiAgfVxyXG4gIFxyXG59Il19