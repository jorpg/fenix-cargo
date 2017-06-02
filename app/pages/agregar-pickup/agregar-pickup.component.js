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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdyZWdhci1waWNrdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWdyZWdhci1waWNrdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxnQ0FBOEI7QUFDOUIsbUVBQTRFO0FBQzVFLHNDQUFtQztBQU1uQyxJQUFhLHNCQUFzQjtJQUlqQyxnQ0FBb0IsTUFBZSxFQUFDLElBQVMsRUFBUyxLQUF5QjtRQUEzRCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQW1CLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBRnhFLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFHaEMsQ0FBQztJQUVMLDRDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVBLG9EQUFtQixHQUFuQjtRQUNPLHdCQUF3QjtRQUN4QixJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxhQUFhO1lBQ3BCLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO1NBQzlELENBQUM7UUFFRixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUNILHdCQUF3QjtJQUM1QixDQUFDO0lBRUwsNkJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLHNCQUFzQjtJQUxsQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFDLDBDQUEwQztRQUN0RCxTQUFTLEVBQUUsQ0FBQyxnREFBZ0QsRUFBQyx5Q0FBeUMsQ0FBQztLQUN4RyxDQUFDO3FDQUs2QixlQUFNLEVBQU0sV0FBSSxFQUFnQiw0QkFBa0I7R0FKcEUsc0JBQXNCLENBMEJsQztBQTFCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzJztcclxuaW1wb3J0IHsgYWN0aW9ufSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICB0ZW1wbGF0ZVVybDpcInBhZ2VzL2FncmVnYXItcGlja3VwL2FncmVnYXItcGlja3VwLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2FncmVnYXItcGlja3VwL2FncmVnYXItcGlja3VwLWNvbW1vbi5jc3NcIixcInBhZ2VzL2FncmVnYXItcGlja3VwL2FncmVnYXItcGlja3VwLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWdyZWdhclBpY2tVcENvbXBvbmVudCB7XHJcbiAgXHJcbiAgcHVibGljIGlzQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyLHBhZ2U6UGFnZSxwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2Upe1xyXG4gICAgfVxyXG5cclxucmVnaXN0cmFyc2UoKXtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90ZXJtaW5vc1wiXSlcclxufVxyXG5cclxuIGRpc3BsYXlBY3Rpb25EaWFsb2coKSB7XHJcbiAgICAgICAgLy8gPj4gYWN0aW9uLWRpYWxvZy1jb2RlXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkRpcmVjY2lvbmVzXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hvb3NlIHlvdXIgYWRkcmVzc1wiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcIkFsaWFzMVwiLCBcIkFsaWFzMlwiLCBcIkFsaWFzM1wiLCBcIkFsaWFzNFwiLCBcIkFsaWFzNVwiXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyA8PCBhY3Rpb24tZGlhbG9nLWNvZGVcclxuICAgIH1cclxuXHJcbn0iXX0=