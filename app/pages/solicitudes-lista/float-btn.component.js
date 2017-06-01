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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsb2F0LWJ0bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUErQjtBQTBCL0IsSUFBYSxrQkFBa0I7SUFDL0IsNEJBQW9CLE1BQWUsRUFBRSxJQUFTO1FBQTFCLFdBQU0sR0FBTixNQUFNLENBQVM7SUFDakMsQ0FBQztJQUNILHdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBRUYseUJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLGtCQUFrQjtJQXhCOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBQyxZQUFZO1FBQ3JCLFFBQVEsRUFBQyx1TEFHUjtRQUNELE1BQU0sRUFBRSxDQUFDLGdTQWVYLENBQUM7S0FFRixDQUFDO3FDQUUyQixlQUFNLEVBQU8sV0FBSTtHQURqQyxrQkFBa0IsQ0FPOUI7QUFQWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOlwiZmxvYXQtYnRuMlwiLFxuICAgIHRlbXBsYXRlOmAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZmxvYXQtYnRuXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XG4gICAgPEJ1dHRvbiB0ZXh0PVwiUGlja3VwIE51ZXZhXCIgKHRhcCk9XCJwaWNrdXBOdWV2YSgpXCIgY2xhc3M9XCJmbG9hdC1idG4tdGV4dFwiPjwvQnV0dG9uPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgIFxuICAgIC5mbG9hdC1idG4ge1xuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICBcbn1cbi5mbG9hdC1idG4tdGV4dHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2RDI7XG4gICB3aWR0aDogMjUwO1xuICAgaGVpZ2h0OiA0MDtcbiAgIGNvbG9yOiAjZmZmZmZmO1xuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGZvbnQtc2l6ZTogMTU7XG4gICBtYXJnaW4tcmlnaHQ6IDMwO1xufWBdXG5cbn0pXG5leHBvcnQgY2xhc3MgRmxvYXRCdG4yQ29tcG9uZW50IHtcbmNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyICxwYWdlOlBhZ2Upe1xuICB9XG5waWNrdXBOdWV2YSgpe1xuICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYWdyZWdhci1waWNrdXBcIl0pXG4gfVxuXG59Il19