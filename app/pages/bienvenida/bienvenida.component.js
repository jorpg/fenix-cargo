"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var BienvenidaComponent = (function () {
    function BienvenidaComponent(router, page) {
        this.router = router;
        this.isLogginIn = true;
        page.actionBarHidden = true;
    }
    BienvenidaComponent.prototype.back = function () {
        this.router.navigate(["/inicioSesion"]);
    };
    BienvenidaComponent.prototype.okButton = function () {
        this.router.navigate(["/perfil"]);
    };
    return BienvenidaComponent;
}());
BienvenidaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "pages/bienvenida/bienvenida.html",
        styleUrls: ["pages/bienvenida/bienvenida-common.css", "pages/bienvenida/bienvenida.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], BienvenidaComponent);
exports.BienvenidaComponent = BienvenidaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmllbnZlbmlkYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiaWVudmVuaWRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsZ0NBQTZCO0FBTzdCLElBQWEsbUJBQW1CO0lBRzlCLDZCQUFvQixNQUFlLEVBQUMsSUFBUztRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBRG5DLGVBQVUsR0FBRSxJQUFJLENBQUM7UUFFZixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsa0NBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBQ0wsc0NBQVEsR0FBUjtRQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBQ0QsMEJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLG1CQUFtQjtJQUwvQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFDLGtDQUFrQztRQUM5QyxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBQyxpQ0FBaUMsQ0FBQztLQUN4RixDQUFDO3FDQUk2QixlQUFNLEVBQU0sV0FBSTtHQUhsQyxtQkFBbUIsQ0FhL0I7QUFiWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZX0gZnJvbSBcInVpL3BhZ2VcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOlwicGFnZXMvYmllbnZlbmlkYS9iaWVudmVuaWRhLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9iaWVudmVuaWRhL2JpZW52ZW5pZGEtY29tbW9uLmNzc1wiLFwicGFnZXMvYmllbnZlbmlkYS9iaWVudmVuaWRhLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBCaWVudmVuaWRhQ29tcG9uZW50IHtcbiAgXG4gIGlzTG9nZ2luSW49IHRydWU7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyLHBhZ2U6UGFnZSl7XG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgYmFjaygpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9pbmljaW9TZXNpb25cIl0pXG4gICAgfVxub2tCdXR0b24oKXtcbiAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9wZXJmaWxcIl0pICBcbn1cbn0iXX0=