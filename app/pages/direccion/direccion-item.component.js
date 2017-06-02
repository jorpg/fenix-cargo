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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWNjaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlyZWNjaW9uLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUV6QyxtRUFBNEU7QUFDNUUsc0NBQW1DO0FBb0RuQyxJQUFhLHNCQUFzQjtJQUVuQyxnQ0FBb0IsTUFBZSxFQUFVLEtBQXlCO1FBQWxELFdBQU0sR0FBTixNQUFNLENBQVM7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFvQjtJQUNuRSxDQUFDO0lBQ0oseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFDRix1Q0FBTSxHQUFOO1FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUNELG9EQUFtQixHQUFuQjtRQUNRLHdCQUF3QjtRQUN4QixJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLFVBQVU7WUFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixPQUFPLEVBQUUsQ0FBQywrQkFBK0IsRUFBQyxrQkFBa0IsQ0FBQztTQUNoRSxDQUFDO1FBRUYsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1FBRTVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsd0JBQXdCO0lBQzVCLENBQUM7SUFDTCw2QkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4Qlksc0JBQXNCO0lBakRsQyxnQkFBUyxDQUFDO1FBQ1gsUUFBUSxFQUFDLHFCQUFxQjtRQUM5QixRQUFRLEVBQUMseTBCQWFSO1FBQ0QsTUFBTSxFQUFFLENBQUMsNGRBNkJQLENBQUM7S0FHRixDQUFDO3FDQUcyQixlQUFNLEVBQWlCLDRCQUFrQjtHQUZ6RCxzQkFBc0IsQ0F3QmxDO0FBeEJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzJztcbmltcG9ydCB7IGFjdGlvbn0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuXG5AQ29tcG9uZW50KHtcbnNlbGVjdG9yOlwiZGlyZWNjaW9uLWxpc3QtaXRlbVwiLFxudGVtcGxhdGU6YFxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPExhYmVsIHRleHQ9XCJBbGlhczpcIiBlZGl0YWJsZT1cImZhbHNlXCIgY2xhc3M9XCJmaWVsZFwiPjwvTGFiZWw+XG4gIDxMYWJlbCB0ZXh0PVwiTG9yZW0gaXBzdW1cIiBlZGl0YWJsZT1cImZhbHNlXCIgY2xhc3M9XCJkYXRhXCI+PC9MYWJlbD5cbiAgPExhYmVsIHRleHQ9XCJEaXJlY2Npb246XCIgZWRpdGFibGU9XCJmYWxzZVwiIGNsYXNzPVwiZmllbGRcIj48L0xhYmVsPlxuICA8TGFiZWwgdGV4dD1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1clwiIGVkaXRhYmxlPVwiZmFsc2VcIiBjbGFzcz1cImRhdGFcIj48L0xhYmVsPlxuICA8TGFiZWwgdGV4dD1cImFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgZWdldCBlbGl0IHNhcGllbi4gUXVpc1wiIGVkaXRhYmxlPVwiZmFsc2VcIiBjbGFzcz1cImRhdGFcIj48L0xhYmVsPlxuICA8TGFiZWwgdGV4dD1cInF1ZSBpbXBlZGlldCBuZWMgbmlzbCBuZWMgc2NlbGVyaXNxdWUuLi5cIiBlZGl0YWJsZT1cImZhbHNlXCIgY2xhc3M9XCJkYXRhXCI+PC9MYWJlbD5cbiAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwiYnV0dG9uc0NvbnRhaW5lclwiPlxuICA8TGFiZWwgdGV4dD1cIkVsaW1pbmFyXCIgKHRhcCk9XCJkaXNwbGF5QWN0aW9uRGlhbG9nKClcIiBjbGFzcyA9XCJlbGltaW5hclwiPjwvTGFiZWw+XG4gIDxMYWJlbCB0ZXh0PVwiRWRpdGFyXCIgKHRhcCk9XCJlZGl0YXIoKVwiIGNsYXNzID1cImJ1dHRvbnNcIj48L0xhYmVsPlxuICA8L1N0YWNrTGF5b3V0PlxuICA8L1N0YWNrTGF5b3V0PlxuYCxcbnN0eWxlczogW2AgXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgbWFyZ2luOiAxMDtcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDEwO1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbn1cbi5maWVsZHtcbiAgIGNvbG9yOiAjNzU3NTc1O1xuICAgbWFyZ2luLWxlZnQ6NTtcbn1cbi5kYXRhe1xuICBjb2xvcjojMDAwMDAwO1xuICBtYXJnaW4tbGVmdDo1O1xufVxuLmJ1dHRvbnNDb250YWluZXJ7XG4gIGJvcmRlci10b3Atd2lkdGg6IDE7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbn1cbi5idXR0b25ze1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbiAgICBjb2xvcjojMDAwMDAwO1xuICAgIG1hcmdpbi1sZWZ0OjQwO1xuICAgIGZvbnQtc2l6ZToyMDtcbn1cbi5lbGltaW5hcntcbiAgbWFyZ2luLWxlZnQ6MTEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG4gIGNvbG9yOiMwMDAwMDA7XG4gIGZvbnQtc2l6ZToyMDtcbn1gXVxuXG5cbn0pXG5leHBvcnQgY2xhc3MgRGlyZWNjaW9uSXRlbUNvbXBvbmVudHtcbiAgXG5jb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlciAscHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlKXtcbiAgIH1cbmVsaW1pbmFyKCl7XG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9kZXRhbGxlcy1pdGVtXCJdKVxuIH1cbmVkaXRhcigpe1xudGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL251ZXZhLWRpcmVjY2lvblwiXSlcbn1cbmRpc3BsYXlBY3Rpb25EaWFsb2coKSB7XG4gICAgICAgIC8vID4+IGFjdGlvbi1kaWFsb2ctY29kZVxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJDb25maXJtZVwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wiRXN0YSBzZWd1cm8gcXVlIHF1aWVyZSBib3JyYXJcIixcImVzdGEgZGlyZWNjaW9uID9cIl1cbiAgICAgICAgfTtcblxuICAgICAgICBhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIDw8IGFjdGlvbi1kaWFsb2ctY29kZVxuICAgIH1cbn0iXX0=