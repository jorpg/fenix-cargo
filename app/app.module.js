"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var float_btn_component_1 = require("./pages/solicitudes-lista/float-btn.component");
var list_item_component_1 = require("./pages/solicitudes-lista/list-item.component");
var float_btn_component_2 = require("./pages/terminos/float-btn.component");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
        ],
        declarations: [app_component_1.AppComponent].concat(app_routing_1.navigatableComponents, [float_btn_component_2.FloatBtnComponent, list_item_component_1.ListItemComponent,
            float_btn_component_1.FloatBtn2Component]),
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGtEQUFrRTtBQUNsRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBRXZFLHFGQUFrRjtBQUNsRixxRkFBaUY7QUFDakYsNEVBQXlFO0FBQ3pFLGlEQUErQztBQUMvQyw2Q0FBOEQ7QUFlOUQsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBYnJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNULHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsNkJBQXNCO1lBQ3RCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQztTQUN2QztRQUNELFlBQVksR0FBRyw0QkFBWSxTQUN4QixtQ0FBcUIsR0FBQyx1Q0FBaUIsRUFBQyx1Q0FBaUI7WUFDNUQsd0NBQWtCLEVBQUM7UUFDbkIsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEZsb2F0QnRuMkNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvc29saWNpdHVkZXMtbGlzdGEvZmxvYXQtYnRuLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL3NvbGljaXR1ZGVzLWxpc3RhL2xpc3QtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZsb2F0QnRuQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvdGVybWlub3MvZmxvYXQtYnRuLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgcm91dGVzLCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsXG4gIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50cyxGbG9hdEJ0bkNvbXBvbmVudCxMaXN0SXRlbUNvbXBvbmVudCxcbiAgRmxvYXRCdG4yQ29tcG9uZW50XSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge30iXX0=