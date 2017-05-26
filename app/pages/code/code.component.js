"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var CodeComponent = (function () {
    function CodeComponent(page, router) {
        this.page = page;
        this.router = router;
    }
    CodeComponent.prototype.ngOnInit = function () {
        // this.page.actionBarHidden = false;
        this.page.backgroundImage = "res://bg_new";
    };
    return CodeComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], CodeComponent.prototype, "container", void 0);
CodeComponent = __decorate([
    core_1.Component({
        selector: "code",
        templateUrl: "pages/code/code.html",
        styleUrls: ["pages/code/code-common.css", "pages/code/code.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], CodeComponent);
exports.CodeComponent = CodeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0Esc0NBQXdFO0FBQ3hFLGdDQUE2QjtBQUM3QiwwQ0FBdUM7QUFPdkMsSUFBYSxhQUFhO0lBT3RCLHVCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUV0RCxDQUFDO0lBUkQsZ0NBQVEsR0FBUjtRQUNJLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFDL0MsQ0FBQztJQVFMLG9CQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFQMkI7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7Z0RBQUM7QUFMckMsYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztLQUNqRSxDQUFDO3FDQVE0QixXQUFJLEVBQWtCLGVBQU07R0FQN0MsYUFBYSxDQVl6QjtBQVpZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2xvcn0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgTGFiZWxNb2R1bGUgPSByZXF1aXJlKFwidWkvbGFiZWxcIik7XG5pbXBvcnQge1ZpZXd9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY29kZVwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9jb2RlL2NvZGUuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2NvZGUvY29kZS1jb21tb24uY3NzXCIsIFwicGFnZXMvY29kZS9jb2RlLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDb2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19uZXdcIjtcbiAgICB9XG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgXG4gICAgfVxuXG4gICAgXG59Il19