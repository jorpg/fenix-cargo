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
    AgregarPickUpComponent.prototype.back = function () {
        this.router.navigate(["/solicitudes-lista"]);
    };
    AgregarPickUpComponent.prototype.displayActionDialog2 = function () {
        // >> action-dialog-code
        var options = {
            title: "",
            message: "confirmacion",
            cancelButtonText: "Si",
            actions: ["Estas seguro que los datos", "suminstrados son correctos?"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdyZWdhci1waWNrdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWdyZWdhci1waWNrdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxnQ0FBOEI7QUFDOUIsbUVBQTRFO0FBQzVFLHNDQUFtQztBQU1uQyxJQUFhLHNCQUFzQjtJQUlqQyxnQ0FBb0IsTUFBZSxFQUFDLElBQVMsRUFBUyxLQUF5QjtRQUEzRCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQW1CLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBRnhFLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFHaEMsQ0FBQztJQUVMLDRDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVBLG9EQUFtQixHQUFuQjtRQUNPLHdCQUF3QjtRQUN4QixJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxhQUFhO1lBQ3BCLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO1NBQzlELENBQUM7UUFFRixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUNILHdCQUF3QjtJQUM1QixDQUFDO0lBQ0QscUNBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFDRCxxREFBb0IsR0FBcEI7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLEdBQUc7WUFDVixLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsT0FBTyxFQUFFLENBQUMsNEJBQTRCLEVBQUMsNkJBQTZCLENBQUM7U0FDeEUsQ0FBQztRQUVGLGdCQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsd0JBQXdCO0lBQzVCLENBQUM7SUFFTCw2QkFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7QUEzQ1ksc0JBQXNCO0lBTGxDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUMsMENBQTBDO1FBQ3RELFNBQVMsRUFBRSxDQUFDLGdEQUFnRCxFQUFDLHlDQUF5QyxDQUFDO0tBQ3hHLENBQUM7cUNBSzZCLGVBQU0sRUFBTSxXQUFJLEVBQWdCLDRCQUFrQjtHQUpwRSxzQkFBc0IsQ0EyQ2xDO0FBM0NZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3MnO1xuaW1wb3J0IHsgYWN0aW9ufSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZVVybDpcInBhZ2VzL2FncmVnYXItcGlja3VwL2FncmVnYXItcGlja3VwLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9hZ3JlZ2FyLXBpY2t1cC9hZ3JlZ2FyLXBpY2t1cC1jb21tb24uY3NzXCIsXCJwYWdlcy9hZ3JlZ2FyLXBpY2t1cC9hZ3JlZ2FyLXBpY2t1cC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQWdyZWdhclBpY2tVcENvbXBvbmVudCB7XG4gIFxuICBwdWJsaWMgaXNDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlcixwYWdlOlBhZ2UscHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlKXtcbiAgICB9XG5cbnJlZ2lzdHJhcnNlKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3Rlcm1pbm9zXCJdKVxufVxuXG4gZGlzcGxheUFjdGlvbkRpYWxvZygpIHtcbiAgICAgICAgLy8gPj4gYWN0aW9uLWRpYWxvZy1jb2RlXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiRGlyZWNjaW9uZXNcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hvb3NlIHlvdXIgYWRkcmVzc1wiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wiQWxpYXMxXCIsIFwiQWxpYXMyXCIsIFwiQWxpYXMzXCIsIFwiQWxpYXM0XCIsIFwiQWxpYXM1XCJdXG4gICAgICAgIH07XG5cbiAgICAgICAgYWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIDw8IGFjdGlvbi1kaWFsb2ctY29kZVxuICAgIH1cbiAgICBiYWNrKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zb2xpY2l0dWRlcy1saXN0YVwiXSlcbiAgICB9XG4gICAgZGlzcGxheUFjdGlvbkRpYWxvZzIoKSB7XG4gICAgICAgIC8vID4+IGFjdGlvbi1kaWFsb2ctY29kZVxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJjb25maXJtYWNpb25cIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiU2lcIixcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcIkVzdGFzIHNlZ3VybyBxdWUgbG9zIGRhdG9zXCIsXCJzdW1pbnN0cmFkb3Mgc29uIGNvcnJlY3Rvcz9cIl1cbiAgICAgICAgfTtcblxuICAgICAgICBhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gPDwgYWN0aW9uLWRpYWxvZy1jb2RlXG4gICAgfVxuXG59Il19