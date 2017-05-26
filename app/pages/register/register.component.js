"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var RegisterComponent = (function () {
    function RegisterComponent(page, router) {
        this.page = page;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // this.page.actionBarHidden = false;
        this.page.backgroundImage = "res://bg_new";
    };
    return RegisterComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], RegisterComponent.prototype, "container", void 0);
RegisterComponent = __decorate([
    core_1.Component({
        selector: "register",
        templateUrl: "pages/register/register.html",
        styleUrls: ["pages/register/register-common.css", "pages/register/register.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxzQ0FBMEU7QUFDMUUsZ0NBQTZCO0FBQzdCLDBDQUF1QztBQU92QyxJQUFhLGlCQUFpQjtJQU8xQiwyQkFBb0IsSUFBVSxFQUFVLE1BQWM7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFdEQsQ0FBQztJQVJELG9DQUFRLEdBQVI7UUFDSSxxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBQy9DLENBQUM7SUFRTCx3QkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBUDJCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO29EQUFDO0FBTHJDLGlCQUFpQjtJQUw3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSw2QkFBNkIsQ0FBQztLQUNqRixDQUFDO3FDQVE0QixXQUFJLEVBQWtCLGVBQU07R0FQN0MsaUJBQWlCLENBWTdCO0FBWlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2xvcn0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgTGFiZWxNb2R1bGUgPSByZXF1aXJlKFwidWkvbGFiZWxcIik7XG5pbXBvcnQge1ZpZXd9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJyZWdpc3RlclwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXItY29tbW9uLmNzc1wiLCBcInBhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfbmV3XCI7XG4gICAgfVxuICAgIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgIFxuICAgIH1cbiAgICBcbiAgICBcbn0iXX0=