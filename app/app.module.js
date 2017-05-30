"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var angular_2 = require("nativescript-telerik-ui/listview/angular");
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
        declarations: [app_component_1.AppComponent].concat(app_routing_1.navigatableComponents, [float_btn_component_2.FloatBtnComponent,
            list_item_component_1.ListItemComponent, float_btn_component_1.FloatBtn2Component,
            angular_2.LISTVIEW_DIRECTIVES, angular_1.SIDEDRAWER_DIRECTIVES]),
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGtEQUFrRTtBQUNsRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLHNFQUFtRjtBQUNuRixvRUFBK0U7QUFFL0UscUZBQWtGO0FBQ2xGLHFGQUFpRjtBQUNqRiw0RUFBeUU7QUFDekUsaURBQStDO0FBQy9DLDZDQUE4RDtBQWdCOUQsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBZHJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNULHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsNkJBQXNCO1lBQ3RCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQztTQUN2QztRQUNELFlBQVksR0FBRyw0QkFBWSxTQUN4QixtQ0FBcUIsR0FBQyx1Q0FBaUI7WUFDMUMsdUNBQWlCLEVBQUMsd0NBQWtCO1lBQ3BDLDZCQUFtQixFQUFDLCtCQUFxQixFQUFDO1FBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7S0FDMUIsQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU0lERURSQVdFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTElTVFZJRVdfRElSRUNUSVZFUyB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBGbG9hdEJ0bjJDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL3NvbGljaXR1ZGVzLWxpc3RhL2Zsb2F0LWJ0bi5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9zb2xpY2l0dWRlcy1saXN0YS9saXN0LWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGbG9hdEJ0bkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3Rlcm1pbm9zL2Zsb2F0LWJ0bi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LFxuICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHMsRmxvYXRCdG5Db21wb25lbnQsXG4gIExpc3RJdGVtQ29tcG9uZW50LEZsb2F0QnRuMkNvbXBvbmVudCxcbiAgTElTVFZJRVdfRElSRUNUSVZFUyxTSURFRFJBV0VSX0RJUkVDVElWRVNdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fSJdfQ==