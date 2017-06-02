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
var direccion_service_1 = require("./pages/solicitudes-lista/direccion.service");
var direccion_service_2 = require("./pages/direccion/direccion.service");
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
        bootstrap: [app_component_1.AppComponent],
        providers: [
            direccion_service_1.ItemService, direccion_service_2.DireccionItemService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGtEQUFrRTtBQUNsRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLHNFQUFtRjtBQUNuRixvRUFBK0U7QUFDL0UsdUZBQW1GO0FBQ25GLDZFQUEwRTtBQUMxRSxxRkFBa0Y7QUFDbEYscUZBQWlGO0FBQ2pGLDRFQUF5RTtBQUN6RSxpREFBK0M7QUFDL0MsNkNBQThEO0FBQzlELGlGQUF5RTtBQUN6RSx5RUFBMEU7QUFvQjFFLElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQW5CckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Qsd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2QkFBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO1NBQ3ZDO1FBQ0QsWUFBWSxHQUFHLDRCQUFZLFNBQ3hCLG1DQUFxQixHQUFDLHVDQUFpQjtZQUMxQyx1Q0FBaUIsRUFBQyx3Q0FBa0I7WUFDcEMsd0NBQWtCLEVBQUMsNkJBQW1CO1lBQ3RDLCtCQUFxQjtZQUNyQixpREFBc0IsRUFBQztRQUN2QixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3hCLFNBQVMsRUFBRTtZQUNOLCtCQUFXLEVBQUMsd0NBQW9CO1NBQ25DO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNJREVEUkFXRVJfRElSRUNUSVZFUyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTElTVFZJRVdfRElSRUNUSVZFUyB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBEaXJlY2Npb25JdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9kaXJlY2Npb24vZGlyZWNjaW9uLWl0ZW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZsb2F0QnRuM0NvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvZGlyZWNjaW9uL2Zsb2F0LWJ0bi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmxvYXRCdG4yQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9zb2xpY2l0dWRlcy1saXN0YS9mbG9hdC1idG4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9zb2xpY2l0dWRlcy1saXN0YS9saXN0LWl0ZW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZsb2F0QnRuQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvdGVybWlub3MvZmxvYXQtYnRuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgSXRlbVNlcnZpY2V9IGZyb20gXCIuL3BhZ2VzL3NvbGljaXR1ZGVzLWxpc3RhL2RpcmVjY2lvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERpcmVjY2lvbkl0ZW1TZXJ2aWNlfSBmcm9tIFwiLi9wYWdlcy9kaXJlY2Npb24vZGlyZWNjaW9uLnNlcnZpY2VcIjtcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudCxcclxuICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHMsRmxvYXRCdG5Db21wb25lbnQsXHJcbiAgTGlzdEl0ZW1Db21wb25lbnQsRmxvYXRCdG4yQ29tcG9uZW50LFxyXG4gIEZsb2F0QnRuM0NvbXBvbmVudCxMSVNUVklFV19ESVJFQ1RJVkVTLFxyXG4gIFNJREVEUkFXRVJfRElSRUNUSVZFUyxcclxuICBEaXJlY2Npb25JdGVtQ29tcG9uZW50XSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG4gICBwcm92aWRlcnM6IFtcclxuICAgICAgICBJdGVtU2VydmljZSxEaXJlY2Npb25JdGVtU2VydmljZVxyXG4gICAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fSJdfQ==