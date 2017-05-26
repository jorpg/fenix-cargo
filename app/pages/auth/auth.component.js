"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var AuthComponent = (function () {
    function AuthComponent(page, router) {
        this.page = page;
        this.router = router;
    }
    AuthComponent.prototype.ngOnInit = function () {
        // this.page.actionBarHidden = false;
        this.page.backgroundImage = "res://bg_new";
    };
    AuthComponent.prototype.login = function () {
        console.log("LOGIN");
        this.router.navigate(["/login"]);
    };
    AuthComponent.prototype.register = function () {
        console.log("REGISTER");
        this.router.navigate(["/register"]);
    };
    return AuthComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], AuthComponent.prototype, "container", void 0);
AuthComponent = __decorate([
    core_1.Component({
        selector: "auth",
        templateUrl: "pages/auth/auth.html",
        styleUrls: ["pages/auth/auth-common.css", "pages/auth/auth.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], AuthComponent);
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0Esc0NBQXdFO0FBQ3hFLGdDQUE2QjtBQUM3QiwwQ0FBdUM7QUFPdkMsSUFBYSxhQUFhO0lBT3RCLHVCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUV0RCxDQUFDO0lBUkQsZ0NBQVEsR0FBUjtRQUNJLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFDL0MsQ0FBQztJQU1ELDZCQUFLLEdBQUw7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsZ0NBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFkMkI7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7Z0RBQUM7QUFMckMsYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztLQUNqRSxDQUFDO3FDQVE0QixXQUFJLEVBQWtCLGVBQU07R0FQN0MsYUFBYSxDQW1CekI7QUFuQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbG9yfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCBMYWJlbE1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9sYWJlbFwiKTtcbmltcG9ydCB7Vmlld30gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhdXRoXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2F1dGgvYXV0aC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvYXV0aC9hdXRoLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9hdXRoL2F1dGguY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX25ld1wiO1xuICAgIH1cbiAgICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICBcbiAgICB9XG4gICAgbG9naW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTE9HSU5cIik7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG4gICAgfVxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJFR0lTVEVSXCIpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmVnaXN0ZXJcIl0pO1xuICAgIH1cbiAgICBcbn0iXX0=