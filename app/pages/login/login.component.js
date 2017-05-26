"use strict";
var color_1 = require("color");
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(page, router, userService) {
        this.page = page;
        this.router = router;
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "";
        this.user.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        //this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_new";
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.pass = function () {
        console.log("PASSWORD");
        this.router.navigate(["/pass"]);
    };
    LoginComponent.prototype.register = function () {
        console.log("REGISTER");
        this.router.navigate(["/register"]);
    };
    LoginComponent.prototype.submit = function () {
        alert("You’re using: " + this.user.email);
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent.prototype.showTabView = function () {
        console.log("TABS");
        this.router.navigate(["/tabs"]);
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQkFBNEI7QUFFNUIsc0NBQXVFO0FBQ3ZFLGdDQUE2QjtBQUM3QiwrQ0FBNEM7QUFDNUMsK0RBQTJEO0FBQzNELDBDQUF1QztBQVF2QyxJQUFhLGNBQWM7SUFVdkIsd0JBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsV0FBd0I7UUFBcEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUh4RixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUlmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFiRCxpQ0FBUSxHQUFSO1FBQ0ksbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztJQUMvQyxDQUFDO0lBWUQsOEJBQUssR0FBTDtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUM1QixTQUFTLENBQ04sY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsRUFDckMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsK0NBQStDLENBQUMsRUFBdEQsQ0FBc0QsQ0FDcEUsQ0FBQztJQUNWLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxTQUFTLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNkLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQztZQUM3RSxRQUFRLEVBQUUsR0FBRztTQUNoQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMvQixTQUFTLENBQ047WUFDSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUNELGNBQU0sT0FBQSxLQUFLLENBQUMsc0RBQXNELENBQUMsRUFBN0QsQ0FBNkQsQ0FDdEUsQ0FBQztJQUNWLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdMLHFCQUFDO0FBQUQsQ0FBQyxBQWhFRCxJQWdFQztBQXhEMkI7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7aURBQUM7QUFSckMsY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3ZFLENBQUM7cUNBVzRCLFdBQUksRUFBa0IsZUFBTSxFQUF1QiwwQkFBVztHQVYvRSxjQUFjLENBZ0UxQjtBQWhFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sb3J9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHtWaWV3fSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX25ld1wiO1xuICAgIH1cbiAgICBcbiAgICB1c2VyOiBVc2VyO1xuICAgIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJcIjtcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJcIjtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIHBhc3MoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUEFTU1dPUkRcIik7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9wYXNzXCJdKTtcbiAgICB9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSRUdJU1RFUlwiKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3JlZ2lzdGVyXCJdKTtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGFsZXJ0KFwiWW914oCZcmUgdXNpbmc6IFwiICsgdGhpcy51c2VyLmVtYWlsKTtcbiAgICB9XG5cbiAgICB0b2dnbGVEaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgICAgIGxldCBjb250YWluZXIgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb250YWluZXIuYW5pbWF0ZSh7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuaXNMb2dnaW5nSW4gPyBuZXcgQ29sb3IoXCJ3aGl0ZVwiKSA6IG5ldyBDb2xvcihcIiMzMDEyMTdcIiksXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25VcCgpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgc2hvd1RhYlZpZXcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVEFCU1wiKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3RhYnNcIl0pO1xuICAgIH1cblxuICAgIFxufSJdfQ==