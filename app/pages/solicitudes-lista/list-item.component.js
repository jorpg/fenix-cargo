"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var ListItemComponent = (function () {
    function ListItemComponent(router, page) {
        this.router = router;
    }
    ListItemComponent.prototype.detalles = function () {
        this.router.navigate(["/detalles-item"]);
    };
    return ListItemComponent;
}());
ListItemComponent = __decorate([
    core_1.Component({
        selector: "list-item",
        template: "\n  <StackLayout orientation=\"horizontal\" (tap)=\"detalles()\" class=\"container\">\n  <Image src=\"res://fenix_logo\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n  <StackLayout orientation=\"horizontal\">\n  <StackLayout orientation=\"vertical\" class=\"details\">\n  <Label text=\"Estatus:\" editable=\"false\"></Label>\n  <Label text=\"Ancho:\" editable=\"false\"></Label>\n  <Label text=\"largo:\" editable=\"false\"></Label>\n  <Label text=\"Peso:\" editable=\"false\"></Label>\n  <Label text=\"Direcci\u00F3n\" editable=\"false\"></Label>\n  </StackLayout>\n  <StackLayout orientation=\"vertical\" class=\"detail\">\n  <Label text=\"Alto: \" editable=\"false\"></Label>\n  </StackLayout>\n  <StackLayout orientation=\"vertical\">\n  <Label text=\"&#xf2fb;\" class=\"material-icon\"></Label>\n  </StackLayout>\n  </StackLayout>\n  </StackLayout>\n",
        styles: [" \n    .container {\n       margin: 10;\n       background-color:#ffffff\n}\n.details{\n   margin-top:10;\n   margin-right:20;\n   margin-left:20;\n}\n.detail{\n    margin-top:30;\n    margin-right:20;\n}\n.material-icon{\n    font-family: 'Material-Design-Iconic-Font';\n    font-size: 30;\n    width: 40;\n    color: #757575;\n    margin-left:40;\n}"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], ListItemComponent);
exports.ListItemComponent = ListItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUErQjtBQStDL0IsSUFBYSxpQkFBaUI7SUFDOUIsMkJBQW9CLE1BQWUsRUFBRSxJQUFTO1FBQTFCLFdBQU0sR0FBTixNQUFNLENBQVM7SUFDaEMsQ0FBQztJQUNKLG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLGlCQUFpQjtJQTlDN0IsZ0JBQVMsQ0FBQztRQUNYLFFBQVEsRUFBQyxXQUFXO1FBQ3BCLFFBQVEsRUFBQyxzMkJBbUJSO1FBQ0QsTUFBTSxFQUFFLENBQUMsaVdBb0JQLENBQUM7S0FHRixDQUFDO3FDQUUyQixlQUFNLEVBQU8sV0FBSTtHQURqQyxpQkFBaUIsQ0FNN0I7QUFOWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuc2VsZWN0b3I6XCJsaXN0LWl0ZW1cIixcclxudGVtcGxhdGU6YFxyXG4gIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiAodGFwKT1cImRldGFsbGVzKClcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gIDxJbWFnZSBzcmM9XCJyZXM6Ly9mZW5peF9sb2dvXCIgc3RyZXRjaD1cIm5vbmVcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCI+PC9JbWFnZT5cclxuICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XHJcbiAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBjbGFzcz1cImRldGFpbHNcIj5cclxuICA8TGFiZWwgdGV4dD1cIkVzdGF0dXM6XCIgZWRpdGFibGU9XCJmYWxzZVwiPjwvTGFiZWw+XHJcbiAgPExhYmVsIHRleHQ9XCJBbmNobzpcIiBlZGl0YWJsZT1cImZhbHNlXCI+PC9MYWJlbD5cclxuICA8TGFiZWwgdGV4dD1cImxhcmdvOlwiIGVkaXRhYmxlPVwiZmFsc2VcIj48L0xhYmVsPlxyXG4gIDxMYWJlbCB0ZXh0PVwiUGVzbzpcIiBlZGl0YWJsZT1cImZhbHNlXCI+PC9MYWJlbD5cclxuICA8TGFiZWwgdGV4dD1cIkRpcmVjY2nDs25cIiBlZGl0YWJsZT1cImZhbHNlXCI+PC9MYWJlbD5cclxuICA8L1N0YWNrTGF5b3V0PlxyXG4gIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgY2xhc3M9XCJkZXRhaWxcIj5cclxuICA8TGFiZWwgdGV4dD1cIkFsdG86IFwiIGVkaXRhYmxlPVwiZmFsc2VcIj48L0xhYmVsPlxyXG4gIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cclxuICA8TGFiZWwgdGV4dD1cIiYjeGYyZmI7XCIgY2xhc3M9XCJtYXRlcmlhbC1pY29uXCI+PC9MYWJlbD5cclxuICA8L1N0YWNrTGF5b3V0PlxyXG4gIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9TdGFja0xheW91dD5cclxuYCxcclxuc3R5bGVzOiBbYCBcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgbWFyZ2luOiAxMDtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZlxyXG59XHJcbi5kZXRhaWxze1xyXG4gICBtYXJnaW4tdG9wOjEwO1xyXG4gICBtYXJnaW4tcmlnaHQ6MjA7XHJcbiAgIG1hcmdpbi1sZWZ0OjIwO1xyXG59XHJcbi5kZXRhaWx7XHJcbiAgICBtYXJnaW4tdG9wOjMwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjIwO1xyXG59XHJcbi5tYXRlcmlhbC1pY29ue1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQnO1xyXG4gICAgZm9udC1zaXplOiAzMDtcclxuICAgIHdpZHRoOiA0MDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgbWFyZ2luLWxlZnQ6NDA7XHJcbn1gXVxyXG5cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0SXRlbUNvbXBvbmVudHtcclxuY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIgLHBhZ2U6UGFnZSl7XHJcbiAgIH1cclxuZGV0YWxsZXMoKXtcclxuICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWxsZXMtaXRlbVwiXSlcclxuIH1cclxufSJdfQ==