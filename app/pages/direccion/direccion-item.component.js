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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWNjaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlyZWNjaW9uLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFDL0IsbUVBQTRFO0FBQzVFLHNDQUFtQztBQW9EbkMsSUFBYSxzQkFBc0I7SUFDbkMsZ0NBQW9CLE1BQWUsRUFBRSxJQUFTLEVBQVMsS0FBeUI7UUFBNUQsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUFvQixVQUFLLEdBQUwsS0FBSyxDQUFvQjtJQUM3RSxDQUFDO0lBQ0oseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFDRix1Q0FBTSxHQUFOO1FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUNELG9EQUFtQixHQUFuQjtRQUNRLHdCQUF3QjtRQUN4QixJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLFVBQVU7WUFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixPQUFPLEVBQUUsQ0FBQywrQkFBK0IsRUFBQyxrQkFBa0IsQ0FBQztTQUNoRSxDQUFDO1FBRUYsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1FBRTVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsd0JBQXdCO0lBQzVCLENBQUM7SUFDTCw2QkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2Qlksc0JBQXNCO0lBakRsQyxnQkFBUyxDQUFDO1FBQ1gsUUFBUSxFQUFDLHFCQUFxQjtRQUM5QixRQUFRLEVBQUMseTBCQWFSO1FBQ0QsTUFBTSxFQUFFLENBQUMsNGRBNkJQLENBQUM7S0FHRixDQUFDO3FDQUUyQixlQUFNLEVBQU8sV0FBSSxFQUFnQiw0QkFBa0I7R0FEbkUsc0JBQXNCLENBdUJsQztBQXZCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2V9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9ncyc7XHJcbmltcG9ydCB7IGFjdGlvbn0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuc2VsZWN0b3I6XCJkaXJlY2Npb24tbGlzdC1pdGVtXCIsXHJcbnRlbXBsYXRlOmBcclxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICA8TGFiZWwgdGV4dD1cIkFsaWFzOlwiIGVkaXRhYmxlPVwiZmFsc2VcIiBjbGFzcz1cImZpZWxkXCI+PC9MYWJlbD5cclxuICA8TGFiZWwgdGV4dD1cIkxvcmVtIGlwc3VtXCIgZWRpdGFibGU9XCJmYWxzZVwiIGNsYXNzPVwiZGF0YVwiPjwvTGFiZWw+XHJcbiAgPExhYmVsIHRleHQ9XCJEaXJlY2Npb246XCIgZWRpdGFibGU9XCJmYWxzZVwiIGNsYXNzPVwiZmllbGRcIj48L0xhYmVsPlxyXG4gIDxMYWJlbCB0ZXh0PVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyXCIgZWRpdGFibGU9XCJmYWxzZVwiIGNsYXNzPVwiZGF0YVwiPjwvTGFiZWw+XHJcbiAgPExhYmVsIHRleHQ9XCJhZGlwaXNjaW5nIGVsaXQuIERvbmVjIGVnZXQgZWxpdCBzYXBpZW4uIFF1aXNcIiBlZGl0YWJsZT1cImZhbHNlXCIgY2xhc3M9XCJkYXRhXCI+PC9MYWJlbD5cclxuICA8TGFiZWwgdGV4dD1cInF1ZSBpbXBlZGlldCBuZWMgbmlzbCBuZWMgc2NlbGVyaXNxdWUuLi5cIiBlZGl0YWJsZT1cImZhbHNlXCIgY2xhc3M9XCJkYXRhXCI+PC9MYWJlbD5cclxuICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgY2xhc3M9XCJidXR0b25zQ29udGFpbmVyXCI+XHJcbiAgPExhYmVsIHRleHQ9XCJFbGltaW5hclwiICh0YXApPVwiZGlzcGxheUFjdGlvbkRpYWxvZygpXCIgY2xhc3MgPVwiZWxpbWluYXJcIj48L0xhYmVsPlxyXG4gIDxMYWJlbCB0ZXh0PVwiRWRpdGFyXCIgKHRhcCk9XCJlZGl0YXIoKVwiIGNsYXNzID1cImJ1dHRvbnNcIj48L0xhYmVsPlxyXG4gIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9TdGFja0xheW91dD5cclxuYCxcclxuc3R5bGVzOiBbYCBcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgbWFyZ2luOiAxMDtcclxuICAgICAgIHBhZGRpbmctbGVmdDogMTA7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbn1cclxuLmZpZWxke1xyXG4gICBjb2xvcjogIzc1NzU3NTtcclxuICAgbWFyZ2luLWxlZnQ6NTtcclxufVxyXG4uZGF0YXtcclxuICBjb2xvcjojMDAwMDAwO1xyXG4gIG1hcmdpbi1sZWZ0OjU7XHJcbn1cclxuLmJ1dHRvbnNDb250YWluZXJ7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMTtcclxuICBib3JkZXItY29sb3I6ICNjY2M7XHJcbn1cclxuLmJ1dHRvbnN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6NDA7XHJcbiAgICBmb250LXNpemU6MjA7XHJcbn1cclxuLmVsaW1pbmFye1xyXG4gIG1hcmdpbi1sZWZ0OjExMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbiAgY29sb3I6IzAwMDAwMDtcclxuICBmb250LXNpemU6MjA7XHJcbn1gXVxyXG5cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaXJlY2Npb25JdGVtQ29tcG9uZW50e1xyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlciAscGFnZTpQYWdlLHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSl7XHJcbiAgIH1cclxuZWxpbWluYXIoKXtcclxuICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWxsZXMtaXRlbVwiXSlcclxuIH1cclxuZWRpdGFyKCl7XHJcbnRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9udWV2YS1kaXJlY2Npb25cIl0pXHJcbn1cclxuZGlzcGxheUFjdGlvbkRpYWxvZygpIHtcclxuICAgICAgICAvLyA+PiBhY3Rpb24tZGlhbG9nLWNvZGVcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ29uZmlybWVcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJFc3RhIHNlZ3VybyBxdWUgcXVpZXJlIGJvcnJhclwiLFwiZXN0YSBkaXJlY2Npb24gP1wiXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gPDwgYWN0aW9uLWRpYWxvZy1jb2RlXHJcbiAgICB9XHJcbn0iXX0=