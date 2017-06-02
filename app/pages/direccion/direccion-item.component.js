"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var dialogs_2 = require("ui/dialogs");
var DireccionItemComponent = (function () {
    function DireccionItemComponent(router, modal) {
        this.router = router;
        this.modal = modal;
    }
    DireccionItemComponent.prototype.eliminar = function () {
        this.router.navigate(["/detalles-item"]);
    };
    DireccionItemComponent.prototype.editar = function () {
        this.router.navigate(["/nueva-direccion"]);
    };
    DireccionItemComponent.prototype.displayActionDialog = function () {
        // >> action-dialog-code
        var options = {
            title: "",
            message: "Confirme",
            cancelButtonText: "Ok",
            actions: ["Esta seguro que quiere borrar", "esta direccion ?"]
        };
        dialogs_2.action(options).then(function (result) {
        });
        // << action-dialog-code
    };
    return DireccionItemComponent;
}());
DireccionItemComponent = __decorate([
    core_1.Component({
        selector: "direccion-list-item",
        template: "\n  <StackLayout class=\"container\">\n  <Label text=\"Alias:\" editable=\"false\" class=\"field\"></Label>\n  <Label text=\"Lorem ipsum\" editable=\"false\" class=\"data\"></Label>\n  <Label text=\"Direccion:\" editable=\"false\" class=\"field\"></Label>\n  <Label text=\"Lorem ipsum dolor sit amet, consectetur\" editable=\"false\" class=\"data\"></Label>\n  <Label text=\"adipiscing elit. Donec eget elit sapien. Quis\" editable=\"false\" class=\"data\"></Label>\n  <Label text=\"que impediet nec nisl nec scelerisque...\" editable=\"false\" class=\"data\"></Label>\n  <StackLayout orientation=\"horizontal\" class=\"buttonsContainer\">\n  <Label text=\"Eliminar\" (tap)=\"displayActionDialog()\" class =\"eliminar\"></Label>\n  <Label text=\"Editar\" (tap)=\"editar()\" class =\"buttons\"></Label>\n  </StackLayout>\n  </StackLayout>\n",
        styles: [" \n    .container {\n       margin: 10;\n       padding-left: 10;\n       background-color:#ffffff;\n}\n.field{\n   color: #757575;\n   margin-left:5;\n}\n.data{\n  color:#000000;\n  margin-left:5;\n}\n.buttonsContainer{\n  border-top-width: 1;\n  border-color: #ccc;\n}\n.buttons{\n    background-color:#ffffff;\n    color:#000000;\n    margin-left:40;\n    font-size:20;\n}\n.eliminar{\n  margin-left:110;\n  background-color:#ffffff;\n  color:#000000;\n  font-size:20;\n}"]
    }),
    __metadata("design:paramtypes", [router_1.Router, dialogs_1.ModalDialogService])
], DireccionItemComponent);
exports.DireccionItemComponent = DireccionItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWNjaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlyZWNjaW9uLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUV6QyxtRUFBNEU7QUFDNUUsc0NBQW1DO0FBb0RuQyxJQUFhLHNCQUFzQjtJQUVuQyxnQ0FBb0IsTUFBZSxFQUFVLEtBQXlCO1FBQWxELFdBQU0sR0FBTixNQUFNLENBQVM7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFvQjtJQUNuRSxDQUFDO0lBQ0oseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFDRix1Q0FBTSxHQUFOO1FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUNELG9EQUFtQixHQUFuQjtRQUNRLHdCQUF3QjtRQUN4QixJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLFVBQVU7WUFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixPQUFPLEVBQUUsQ0FBQywrQkFBK0IsRUFBQyxrQkFBa0IsQ0FBQztTQUNoRSxDQUFDO1FBRUYsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1FBRTVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsd0JBQXdCO0lBQzVCLENBQUM7SUFDTCw2QkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4Qlksc0JBQXNCO0lBakRsQyxnQkFBUyxDQUFDO1FBQ1gsUUFBUSxFQUFDLHFCQUFxQjtRQUM5QixRQUFRLEVBQUMseTBCQWFSO1FBQ0QsTUFBTSxFQUFFLENBQUMsNGRBNkJQLENBQUM7S0FHRixDQUFDO3FDQUcyQixlQUFNLEVBQWlCLDRCQUFrQjtHQUZ6RCxzQkFBc0IsQ0F3QmxDO0FBeEJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzJztcclxuaW1wb3J0IHsgYWN0aW9ufSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG5zZWxlY3RvcjpcImRpcmVjY2lvbi1saXN0LWl0ZW1cIixcclxudGVtcGxhdGU6YFxyXG4gIDxTdGFja0xheW91dCBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gIDxMYWJlbCB0ZXh0PVwiQWxpYXM6XCIgZWRpdGFibGU9XCJmYWxzZVwiIGNsYXNzPVwiZmllbGRcIj48L0xhYmVsPlxyXG4gIDxMYWJlbCB0ZXh0PVwiTG9yZW0gaXBzdW1cIiBlZGl0YWJsZT1cImZhbHNlXCIgY2xhc3M9XCJkYXRhXCI+PC9MYWJlbD5cclxuICA8TGFiZWwgdGV4dD1cIkRpcmVjY2lvbjpcIiBlZGl0YWJsZT1cImZhbHNlXCIgY2xhc3M9XCJmaWVsZFwiPjwvTGFiZWw+XHJcbiAgPExhYmVsIHRleHQ9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXJcIiBlZGl0YWJsZT1cImZhbHNlXCIgY2xhc3M9XCJkYXRhXCI+PC9MYWJlbD5cclxuICA8TGFiZWwgdGV4dD1cImFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgZWdldCBlbGl0IHNhcGllbi4gUXVpc1wiIGVkaXRhYmxlPVwiZmFsc2VcIiBjbGFzcz1cImRhdGFcIj48L0xhYmVsPlxyXG4gIDxMYWJlbCB0ZXh0PVwicXVlIGltcGVkaWV0IG5lYyBuaXNsIG5lYyBzY2VsZXJpc3F1ZS4uLlwiIGVkaXRhYmxlPVwiZmFsc2VcIiBjbGFzcz1cImRhdGFcIj48L0xhYmVsPlxyXG4gIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBjbGFzcz1cImJ1dHRvbnNDb250YWluZXJcIj5cclxuICA8TGFiZWwgdGV4dD1cIkVsaW1pbmFyXCIgKHRhcCk9XCJkaXNwbGF5QWN0aW9uRGlhbG9nKClcIiBjbGFzcyA9XCJlbGltaW5hclwiPjwvTGFiZWw+XHJcbiAgPExhYmVsIHRleHQ9XCJFZGl0YXJcIiAodGFwKT1cImVkaXRhcigpXCIgY2xhc3MgPVwiYnV0dG9uc1wiPjwvTGFiZWw+XHJcbiAgPC9TdGFja0xheW91dD5cclxuICA8L1N0YWNrTGF5b3V0PlxyXG5gLFxyXG5zdHlsZXM6IFtgIFxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICBtYXJnaW46IDEwO1xyXG4gICAgICAgcGFkZGluZy1sZWZ0OiAxMDtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufVxyXG4uZmllbGR7XHJcbiAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICBtYXJnaW4tbGVmdDo1O1xyXG59XHJcbi5kYXRhe1xyXG4gIGNvbG9yOiMwMDAwMDA7XHJcbiAgbWFyZ2luLWxlZnQ6NTtcclxufVxyXG4uYnV0dG9uc0NvbnRhaW5lcntcclxuICBib3JkZXItdG9wLXdpZHRoOiAxO1xyXG4gIGJvcmRlci1jb2xvcjogI2NjYztcclxufVxyXG4uYnV0dG9uc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgICBtYXJnaW4tbGVmdDo0MDtcclxuICAgIGZvbnQtc2l6ZToyMDtcclxufVxyXG4uZWxpbWluYXJ7XHJcbiAgbWFyZ2luLWxlZnQ6MTEwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxuICBjb2xvcjojMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZToyMDtcclxufWBdXHJcblxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIERpcmVjY2lvbkl0ZW1Db21wb25lbnR7XHJcbiAgXHJcbmNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyICxwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2Upe1xyXG4gICB9XHJcbmVsaW1pbmFyKCl7XHJcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RldGFsbGVzLWl0ZW1cIl0pXHJcbiB9XHJcbmVkaXRhcigpe1xyXG50aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbnVldmEtZGlyZWNjaW9uXCJdKVxyXG59XHJcbmRpc3BsYXlBY3Rpb25EaWFsb2coKSB7XHJcbiAgICAgICAgLy8gPj4gYWN0aW9uLWRpYWxvZy1jb2RlXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNvbmZpcm1lXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgICAgYWN0aW9uczogW1wiRXN0YSBzZWd1cm8gcXVlIHF1aWVyZSBib3JyYXJcIixcImVzdGEgZGlyZWNjaW9uID9cIl1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIDw8IGFjdGlvbi1kaWFsb2ctY29kZVxyXG4gICAgfVxyXG59Il19