"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var angular_2 = require("nativescript-telerik-ui/listview/angular");
var direccion_item_component_1 = require("./pages/direccion/direccion-item.component");
var float_btn_component_1 = require("./pages/direccion/float-btn.component");
var float_btn_component_2 = require("./pages/solicitudes-lista/float-btn.component");
var list_item_component_1 = require("./pages/solicitudes-lista/list-item.component");
var float_btn_component_3 = require("./pages/terminos/float-btn.component");
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
        declarations: [app_component_1.AppComponent].concat(app_routing_1.navigatableComponents, [float_btn_component_3.FloatBtnComponent,
            list_item_component_1.ListItemComponent, float_btn_component_2.FloatBtn2Component,
            float_btn_component_1.FloatBtn3Component, angular_2.LISTVIEW_DIRECTIVES,
            angular_1.SIDEDRAWER_DIRECTIVES,
            direccion_item_component_1.DireccionItemComponent]),
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGtEQUFrRTtBQUNsRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLHNFQUFtRjtBQUNuRixvRUFBK0U7QUFDL0UsdUZBQW1GO0FBQ25GLDZFQUEwRTtBQUMxRSxxRkFBa0Y7QUFDbEYscUZBQWlGO0FBQ2pGLDRFQUF5RTtBQUN6RSxpREFBK0M7QUFDL0MsNkNBQThEO0FBa0I5RCxJQUFhLFNBQVM7SUFBdEI7SUFBd0IsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUF6QixJQUF5QjtBQUFaLFNBQVM7SUFoQnJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNULHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsNkJBQXNCO1lBQ3RCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQztTQUN2QztRQUNELFlBQVksR0FBRyw0QkFBWSxTQUN4QixtQ0FBcUIsR0FBQyx1Q0FBaUI7WUFDMUMsdUNBQWlCLEVBQUMsd0NBQWtCO1lBQ3BDLHdDQUFrQixFQUFDLDZCQUFtQjtZQUN0QywrQkFBcUI7WUFDckIsaURBQXNCLEVBQUM7UUFDdkIsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTSURFRFJBV0VSX0RJUkVDVElWRVMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBMSVNUVklFV19ESVJFQ1RJVkVTIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcvYW5ndWxhcic7XG5pbXBvcnQgeyBEaXJlY2Npb25JdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9kaXJlY2Npb24vZGlyZWNjaW9uLWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGbG9hdEJ0bjNDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2RpcmVjY2lvbi9mbG9hdC1idG4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGbG9hdEJ0bjJDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL3NvbGljaXR1ZGVzLWxpc3RhL2Zsb2F0LWJ0bi5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9zb2xpY2l0dWRlcy1saXN0YS9saXN0LWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGbG9hdEJ0bkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3Rlcm1pbm9zL2Zsb2F0LWJ0bi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LFxuICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHMsRmxvYXRCdG5Db21wb25lbnQsXG4gIExpc3RJdGVtQ29tcG9uZW50LEZsb2F0QnRuMkNvbXBvbmVudCxcbiAgRmxvYXRCdG4zQ29tcG9uZW50LExJU1RWSUVXX0RJUkVDVElWRVMsXG4gIFNJREVEUkFXRVJfRElSRUNUSVZFUyxcbiAgRGlyZWNjaW9uSXRlbUNvbXBvbmVudF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9Il19