"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var PassComponent = (function () {
    function PassComponent(page, router) {
        this.page = page;
        this.router = router;
    }
    PassComponent.prototype.ngOnInit = function () {
        // this.page.actionBarHidden = false;
        this.page.backgroundImage = "res://bg_new";
    };
    PassComponent.prototype.code = function () {
        console.log("INTRO CODE");
        this.router.navigate(["/code"]);
    };
    return PassComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], PassComponent.prototype, "container", void 0);
PassComponent = __decorate([
    core_1.Component({
        selector: "pass",
        templateUrl: "pages/pass/pass.html",
        styleUrls: ["pages/pass/pass-common.css", "pages/pass/pass.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], PassComponent);
exports.PassComponent = PassComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0Esc0NBQXdFO0FBQ3hFLGdDQUE2QjtBQUM3QiwwQ0FBdUM7QUFPdkMsSUFBYSxhQUFhO0lBT3RCLHVCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUV0RCxDQUFDO0lBUkQsZ0NBQVEsR0FBUjtRQUNJLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFDL0MsQ0FBQztJQU9ELDRCQUFJLEdBQUo7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQVYyQjtJQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzs4QkFBWSxpQkFBVTtnREFBQztBQUxyQyxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO0tBQ2pFLENBQUM7cUNBUTRCLFdBQUksRUFBa0IsZUFBTTtHQVA3QyxhQUFhLENBZXpCO0FBZlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbG9yfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCBMYWJlbE1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9sYWJlbFwiKTtcbmltcG9ydCB7Vmlld30gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJwYXNzXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3Bhc3MvcGFzcy5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvcGFzcy9wYXNzLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9wYXNzL3Bhc3MuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFBhc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX25ld1wiO1xuICAgIH1cbiAgICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICBcbiAgICB9XG5cbiAgICBjb2RlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklOVFJPIENPREVcIik7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jb2RlXCJdKTtcbiAgICB9XG59Il19