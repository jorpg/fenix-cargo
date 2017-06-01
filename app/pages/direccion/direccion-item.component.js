"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var dialogs_2 = require("ui/dialogs");
var DireccionItemComponent = (function () {
    function DireccionItemComponent(router, page, modal) {
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
    __metadata("design:paramtypes", [router_1.Router, page_1.Page, dialogs_1.ModalDialogService])
], DireccionItemComponent);
exports.DireccionItemComponent = DireccionItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWNjaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlyZWNjaW9uLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFDL0IsbUVBQTRFO0FBQzVFLHNDQUFtQztBQW9EbkMsSUFBYSxzQkFBc0I7SUFDbkMsZ0NBQW9CLE1BQWUsRUFBRSxJQUFTLEVBQVMsS0FBeUI7UUFBNUQsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUFvQixVQUFLLEdBQUwsS0FBSyxDQUFvQjtJQUM3RSxDQUFDO0lBQ0oseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFDRix1Q0FBTSxHQUFOO1FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUNELG9EQUFtQixHQUFuQjtRQUNRLHdCQUF3QjtRQUN4QixJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLFVBQVU7WUFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixPQUFPLEVBQUUsQ0FBQywrQkFBK0IsRUFBQyxrQkFBa0IsQ0FBQztTQUNoRSxDQUFDO1FBRUYsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1FBRTVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsd0JBQXdCO0lBQzVCLENBQUM7SUFDTCw2QkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2Qlksc0JBQXNCO0lBakRsQyxnQkFBUyxDQUFDO1FBQ1gsUUFBUSxFQUFDLHFCQUFxQjtRQUM5QixRQUFRLEVBQUMseTBCQWFSO1FBQ0QsTUFBTSxFQUFFLENBQUMsNGRBNkJQLENBQUM7S0FHRixDQUFDO3FDQUUyQixlQUFNLEVBQU8sV0FBSSxFQUFnQiw0QkFBa0I7R0FEbkUsc0JBQXNCLENBdUJsQztBQXZCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2V9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9ncyc7XG5pbXBvcnQgeyBhY3Rpb259IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cblxuQENvbXBvbmVudCh7XG5zZWxlY3RvcjpcImRpcmVjY2lvbi1saXN0LWl0ZW1cIixcbnRlbXBsYXRlOmBcbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxMYWJlbCB0ZXh0PVwiQWxpYXM6XCIgZWRpdGFibGU9XCJmYWxzZVwiIGNsYXNzPVwiZmllbGRcIj48L0xhYmVsPlxuICA8TGFiZWwgdGV4dD1cIkxvcmVtIGlwc3VtXCIgZWRpdGFibGU9XCJmYWxzZVwiIGNsYXNzPVwiZGF0YVwiPjwvTGFiZWw+XG4gIDxMYWJlbCB0ZXh0PVwiRGlyZWNjaW9uOlwiIGVkaXRhYmxlPVwiZmFsc2VcIiBjbGFzcz1cImZpZWxkXCI+PC9MYWJlbD5cbiAgPExhYmVsIHRleHQ9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXJcIiBlZGl0YWJsZT1cImZhbHNlXCIgY2xhc3M9XCJkYXRhXCI+PC9MYWJlbD5cbiAgPExhYmVsIHRleHQ9XCJhZGlwaXNjaW5nIGVsaXQuIERvbmVjIGVnZXQgZWxpdCBzYXBpZW4uIFF1aXNcIiBlZGl0YWJsZT1cImZhbHNlXCIgY2xhc3M9XCJkYXRhXCI+PC9MYWJlbD5cbiAgPExhYmVsIHRleHQ9XCJxdWUgaW1wZWRpZXQgbmVjIG5pc2wgbmVjIHNjZWxlcmlzcXVlLi4uXCIgZWRpdGFibGU9XCJmYWxzZVwiIGNsYXNzPVwiZGF0YVwiPjwvTGFiZWw+XG4gIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBjbGFzcz1cImJ1dHRvbnNDb250YWluZXJcIj5cbiAgPExhYmVsIHRleHQ9XCJFbGltaW5hclwiICh0YXApPVwiZGlzcGxheUFjdGlvbkRpYWxvZygpXCIgY2xhc3MgPVwiZWxpbWluYXJcIj48L0xhYmVsPlxuICA8TGFiZWwgdGV4dD1cIkVkaXRhclwiICh0YXApPVwiZWRpdGFyKClcIiBjbGFzcyA9XCJidXR0b25zXCI+PC9MYWJlbD5cbiAgPC9TdGFja0xheW91dD5cbiAgPC9TdGFja0xheW91dD5cbmAsXG5zdHlsZXM6IFtgIFxuICAgIC5jb250YWluZXIge1xuICAgICAgIG1hcmdpbjogMTA7XG4gICAgICAgcGFkZGluZy1sZWZ0OiAxMDtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG59XG4uZmllbGR7XG4gICBjb2xvcjogIzc1NzU3NTtcbiAgIG1hcmdpbi1sZWZ0OjU7XG59XG4uZGF0YXtcbiAgY29sb3I6IzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6NTtcbn1cbi5idXR0b25zQ29udGFpbmVye1xuICBib3JkZXItdG9wLXdpZHRoOiAxO1xuICBib3JkZXItY29sb3I6ICNjY2M7XG59XG4uYnV0dG9uc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG4gICAgY29sb3I6IzAwMDAwMDtcbiAgICBtYXJnaW4tbGVmdDo0MDtcbiAgICBmb250LXNpemU6MjA7XG59XG4uZWxpbWluYXJ7XG4gIG1hcmdpbi1sZWZ0OjExMDtcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xuICBjb2xvcjojMDAwMDAwO1xuICBmb250LXNpemU6MjA7XG59YF1cblxuXG59KVxuZXhwb3J0IGNsYXNzIERpcmVjY2lvbkl0ZW1Db21wb25lbnR7XG5jb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlciAscGFnZTpQYWdlLHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSl7XG4gICB9XG5lbGltaW5hcigpe1xuICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWxsZXMtaXRlbVwiXSlcbiB9XG5lZGl0YXIoKXtcbnRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9udWV2YS1kaXJlY2Npb25cIl0pXG59XG5kaXNwbGF5QWN0aW9uRGlhbG9nKCkge1xuICAgICAgICAvLyA+PiBhY3Rpb24tZGlhbG9nLWNvZGVcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ29uZmlybWVcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcIkVzdGEgc2VndXJvIHF1ZSBxdWllcmUgYm9ycmFyXCIsXCJlc3RhIGRpcmVjY2lvbiA/XCJdXG4gICAgICAgIH07XG5cbiAgICAgICAgYWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICAvLyA8PCBhY3Rpb24tZGlhbG9nLWNvZGVcbiAgICB9XG59Il19