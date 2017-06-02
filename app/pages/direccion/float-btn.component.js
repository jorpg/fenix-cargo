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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsb2F0LWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUErQjtBQTBCL0IsSUFBYSxrQkFBa0I7SUFDL0IsNEJBQW9CLE1BQWUsRUFBRSxJQUFTO1FBQTFCLFdBQU0sR0FBTixNQUFNLENBQVM7SUFDakMsQ0FBQztJQUNILHdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRUYseUJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLGtCQUFrQjtJQXhCOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBQyxZQUFZO1FBQ3JCLFFBQVEsRUFBQyxvS0FHUjtRQUNELE1BQU0sRUFBRSxDQUFDLHlTQWVYLENBQUM7S0FFRixDQUFDO3FDQUUyQixlQUFNLEVBQU8sV0FBSTtHQURqQyxrQkFBa0IsQ0FPOUI7QUFQWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOlwiZmxvYXQtYnRuM1wiLFxuICAgIHRlbXBsYXRlOmAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZmxvYXQtYnRuXCI+XG4gICAgPEJ1dHRvbiB0ZXh0PVwiTnVldmEgRGlyZWNjacOzblwiICh0YXApPVwicGlja3VwTnVldmEoKVwiIGNsYXNzPVwiZmxvYXQtYnRuLXRleHRcIj48L0J1dHRvbj5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYCBcbiAgICAuZmxvYXQtYnRuIHtcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgXG4gICAgIH1cbiAgICAuZmxvYXQtYnRuLXRleHR7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NkQyO1xuICAgd2lkdGg6IDI1MDtcbiAgIGhlaWdodDogNDA7XG4gICBjb2xvcjogI2ZmZmZmZjtcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICBmb250LXNpemU6IDE1O1xuICAgbWFyZ2luLXJpZ2h0OiAzMDtcbn1gXVxuXG59KVxuZXhwb3J0IGNsYXNzIEZsb2F0QnRuM0NvbXBvbmVudCB7XG5jb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlciAscGFnZTpQYWdlKXtcbiAgfVxucGlja3VwTnVldmEoKXtcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL251ZXZhLWRpcmVjY2lvblwiXSlcbiB9XG5cbn0iXX0=