"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var dialogs_2 = require("ui/dialogs");
var AgregarPickUpComponent = (function () {
    function AgregarPickUpComponent(router, page, modal) {
        this.router = router;
        this.modal = modal;
        this.isChecked = false;
    }
    AgregarPickUpComponent.prototype.registrarse = function () {
        this.router.navigate(["/terminos"]);
    };
    AgregarPickUpComponent.prototype.displayActionDialog = function () {
        // >> action-dialog-code
        var options = {
            title: "Direcciones",
            message: "Choose your address",
            cancelButtonText: "Ok",
            actions: ["Alias1", "Alias2", "Alias3", "Alias4", "Alias5"]
        };
        dialogs_2.action(options).then(function (result) {
            console.log(result);
        });
        // << action-dialog-code
    };
    return AgregarPickUpComponent;
}());
AgregarPickUpComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "pages/agregar-pickup/agregar-pickup.html",
        styleUrls: ["pages/agregar-pickup/agregar-pickup-common.css", "pages/agregar-pickup/agregar-pickup.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page, dialogs_1.ModalDialogService])
], AgregarPickUpComponent);
exports.AgregarPickUpComponent = AgregarPickUpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdyZWdhci1waWNrdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWdyZWdhci1waWNrdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxnQ0FBOEI7QUFDOUIsbUVBQTRFO0FBQzVFLHNDQUFtQztBQU1uQyxJQUFhLHNCQUFzQjtJQUlqQyxnQ0FBb0IsTUFBZSxFQUFDLElBQVMsRUFBUyxLQUF5QjtRQUEzRCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQW1CLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBRnhFLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFHaEMsQ0FBQztJQUVMLDRDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVBLG9EQUFtQixHQUFuQjtRQUNPLHdCQUF3QjtRQUN4QixJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxhQUFhO1lBQ3BCLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO1NBQzlELENBQUM7UUFFRixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUNILHdCQUF3QjtJQUM1QixDQUFDO0lBRUwsNkJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLHNCQUFzQjtJQUxsQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFDLDBDQUEwQztRQUN0RCxTQUFTLEVBQUUsQ0FBQyxnREFBZ0QsRUFBQyx5Q0FBeUMsQ0FBQztLQUN4RyxDQUFDO3FDQUs2QixlQUFNLEVBQU0sV0FBSSxFQUFnQiw0QkFBa0I7R0FKcEUsc0JBQXNCLENBMEJsQztBQTFCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzJztcbmltcG9ydCB7IGFjdGlvbn0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9hZ3JlZ2FyLXBpY2t1cC9hZ3JlZ2FyLXBpY2t1cC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvYWdyZWdhci1waWNrdXAvYWdyZWdhci1waWNrdXAtY29tbW9uLmNzc1wiLFwicGFnZXMvYWdyZWdhci1waWNrdXAvYWdyZWdhci1waWNrdXAuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEFncmVnYXJQaWNrVXBDb21wb25lbnQge1xuICBcbiAgcHVibGljIGlzQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIscGFnZTpQYWdlLHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSl7XG4gICAgfVxuXG5yZWdpc3RyYXJzZSgpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90ZXJtaW5vc1wiXSlcbn1cblxuIGRpc3BsYXlBY3Rpb25EaWFsb2coKSB7XG4gICAgICAgIC8vID4+IGFjdGlvbi1kaWFsb2ctY29kZVxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkRpcmVjY2lvbmVzXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNob29zZSB5b3VyIGFkZHJlc3NcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcIkFsaWFzMVwiLCBcIkFsaWFzMlwiLCBcIkFsaWFzM1wiLCBcIkFsaWFzNFwiLCBcIkFsaWFzNVwiXVxuICAgICAgICB9O1xuXG4gICAgICAgIGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyA8PCBhY3Rpb24tZGlhbG9nLWNvZGVcbiAgICB9XG5cbn0iXX0=