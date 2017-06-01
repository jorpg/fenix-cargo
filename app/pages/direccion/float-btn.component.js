"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var FloatBtn3Component = (function () {
    function FloatBtn3Component(router, page) {
        this.router = router;
    }
    FloatBtn3Component.prototype.pickupNueva = function () {
        this.router.navigate(["/nueva-direccion"]);
    };
    return FloatBtn3Component;
}());
FloatBtn3Component = __decorate([
    core_1.Component({
        selector: "float-btn3",
        template: " <StackLayout class=\"float-btn\">\n    <Button text=\"Nueva Direcci\u00F3n\" (tap)=\"pickupNueva()\" class=\"float-btn-text\"></Button>\n    </StackLayout>\n    ",
        styles: [" \n    .float-btn {\n       text-align: center;\n       vertical-align: bottom;\n     \n     }\n    .float-btn-text{\n   background-color: #1976D2;\n   width: 250;\n   height: 40;\n   color: #ffffff;\n   vertical-align: middle;\n   border-radius: 50%;\n   font-size: 15;\n   margin-right: 30;\n}"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], FloatBtn3Component);
exports.FloatBtn3Component = FloatBtn3Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsb2F0LWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUErQjtBQTBCL0IsSUFBYSxrQkFBa0I7SUFDL0IsNEJBQW9CLE1BQWUsRUFBRSxJQUFTO1FBQTFCLFdBQU0sR0FBTixNQUFNLENBQVM7SUFDakMsQ0FBQztJQUNILHdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRUYseUJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLGtCQUFrQjtJQXhCOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBQyxZQUFZO1FBQ3JCLFFBQVEsRUFBQyxvS0FHUjtRQUNELE1BQU0sRUFBRSxDQUFDLHlTQWVYLENBQUM7S0FFRixDQUFDO3FDQUUyQixlQUFNLEVBQU8sV0FBSTtHQURqQyxrQkFBa0IsQ0FPOUI7QUFQWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjpcImZsb2F0LWJ0bjNcIixcclxuICAgIHRlbXBsYXRlOmAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZmxvYXQtYnRuXCI+XHJcbiAgICA8QnV0dG9uIHRleHQ9XCJOdWV2YSBEaXJlY2Npw7NuXCIgKHRhcCk9XCJwaWNrdXBOdWV2YSgpXCIgY2xhc3M9XCJmbG9hdC1idG4tdGV4dFwiPjwvQnV0dG9uPlxyXG4gICAgPC9TdGFja0xheW91dD5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgIFxyXG4gICAgLmZsb2F0LWJ0biB7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgIFxyXG4gICAgIH1cclxuICAgIC5mbG9hdC1idG4tdGV4dHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZEMjtcclxuICAgd2lkdGg6IDI1MDtcclxuICAgaGVpZ2h0OiA0MDtcclxuICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgZm9udC1zaXplOiAxNTtcclxuICAgbWFyZ2luLXJpZ2h0OiAzMDtcclxufWBdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmxvYXRCdG4zQ29tcG9uZW50IHtcclxuY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIgLHBhZ2U6UGFnZSl7XHJcbiAgfVxyXG5waWNrdXBOdWV2YSgpe1xyXG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9udWV2YS1kaXJlY2Npb25cIl0pXHJcbiB9XHJcblxyXG59Il19