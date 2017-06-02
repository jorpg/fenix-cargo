"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var FloatBtn2Component = (function () {
    function FloatBtn2Component(router, page) {
        this.router = router;
    }
    FloatBtn2Component.prototype.pickupNueva = function () {
        this.router.navigate(["/agregar-pickup"]);
    };
    return FloatBtn2Component;
}());
FloatBtn2Component = __decorate([
    core_1.Component({
        selector: "float-btn2",
        template: " <StackLayout class=\"float-btn\" orientation=\"horizontal\">\n    <Button text=\"Pickup Nueva\" (tap)=\"pickupNueva()\" class=\"float-btn-text\"></Button>\n    </StackLayout>\n    ",
        styles: [" \n    .float-btn {\n       text-align: center;\n       vertical-align: bottom;\n     \n}\n.float-btn-text{\n   background-color: #1976D2;\n   width: 250;\n   height: 40;\n   color: #ffffff;\n   vertical-align: middle;\n   border-radius: 50%;\n   font-size: 15;\n   margin-right: 30;\n}"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], FloatBtn2Component);
exports.FloatBtn2Component = FloatBtn2Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsb2F0LWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUErQjtBQTBCL0IsSUFBYSxrQkFBa0I7SUFDL0IsNEJBQW9CLE1BQWUsRUFBRSxJQUFTO1FBQTFCLFdBQU0sR0FBTixNQUFNLENBQVM7SUFDakMsQ0FBQztJQUNILHdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBRUYseUJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLGtCQUFrQjtJQXhCOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBQyxZQUFZO1FBQ3JCLFFBQVEsRUFBQyx1TEFHUjtRQUNELE1BQU0sRUFBRSxDQUFDLGdTQWVYLENBQUM7S0FFRixDQUFDO3FDQUUyQixlQUFNLEVBQU8sV0FBSTtHQURqQyxrQkFBa0IsQ0FPOUI7QUFQWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjpcImZsb2F0LWJ0bjJcIixcclxuICAgIHRlbXBsYXRlOmAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZmxvYXQtYnRuXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICA8QnV0dG9uIHRleHQ9XCJQaWNrdXAgTnVldmFcIiAodGFwKT1cInBpY2t1cE51ZXZhKClcIiBjbGFzcz1cImZsb2F0LWJ0bi10ZXh0XCI+PC9CdXR0b24+XHJcbiAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW2AgXHJcbiAgICAuZmxvYXQtYnRuIHtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgXHJcbn1cclxuLmZsb2F0LWJ0bi10ZXh0e1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NkQyO1xyXG4gICB3aWR0aDogMjUwO1xyXG4gICBoZWlnaHQ6IDQwO1xyXG4gICBjb2xvcjogI2ZmZmZmZjtcclxuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICBmb250LXNpemU6IDE1O1xyXG4gICBtYXJnaW4tcmlnaHQ6IDMwO1xyXG59YF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbG9hdEJ0bjJDb21wb25lbnQge1xyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlciAscGFnZTpQYWdlKXtcclxuICB9XHJcbnBpY2t1cE51ZXZhKCl7XHJcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FncmVnYXItcGlja3VwXCJdKVxyXG4gfVxyXG5cclxufSJdfQ==