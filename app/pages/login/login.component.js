"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var LoginComponent = (function () {
    function LoginComponent(router, page) {
        this.router = router;
        this.isLogginIn = true;
        page.actionBarHidden = true;
    }
    LoginComponent.prototype.login = function () {
        this.router.navigate(["/inicioSesion"]);
    };
    LoginComponent.prototype.registrarse = function () {
        this.router.navigate(["/registrarse"]);
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLogginIn = !this.isLogginIn;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFNL0IsSUFBYSxjQUFjO0lBSXpCLHdCQUFvQixNQUFlLEVBQUUsSUFBUztRQUExQixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBRm5DLGVBQVUsR0FBRSxJQUFJLENBQUM7UUFJZixJQUFJLENBQUMsZUFBZSxHQUFDLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ0gsOEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBQ0Ysb0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBQ0Qsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBRXJDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbkIsV0FBVyxFQUFDLHdCQUF3QjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBQyx1QkFBdUIsQ0FBQztLQUNwRSxDQUFDO3FDQUs2QixlQUFNLEVBQU8sV0FBSTtHQUpuQyxjQUFjLENBa0IxQjtBQWxCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gdGVtcGxhdGVVcmw6XCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuIFxyXG4gIGlzTG9nZ2luSW49IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyICxwYWdlOlBhZ2Upe1xyXG4gICBcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuPXRydWU7XHJcbiAgfVxyXG5sb2dpbigpe1xyXG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9pbmljaW9TZXNpb25cIl0pXHJcbiB9XHJcbnJlZ2lzdHJhcnNlKCl7XHJcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3JlZ2lzdHJhcnNlXCJdKVxyXG4gIH1cclxuICB0b2dnbGVEaXNwbGF5KCl7XHJcbiAgICB0aGlzLmlzTG9nZ2luSW4gPSAhdGhpcy5pc0xvZ2dpbkluO1xyXG4gICAgXHJcbiAgfVxyXG59Il19