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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGtEQUFrRTtBQUNsRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLHNFQUFtRjtBQUNuRixvRUFBK0U7QUFDL0UsdUZBQW1GO0FBQ25GLDZFQUEwRTtBQUMxRSxxRkFBa0Y7QUFDbEYscUZBQWlGO0FBQ2pGLDRFQUF5RTtBQUN6RSxpREFBK0M7QUFDL0MsNkNBQThEO0FBQzlELGlGQUF5RTtBQUN6RSx5RUFBMEU7QUFvQjFFLElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQW5CckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Qsd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2QkFBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO1NBQ3ZDO1FBQ0QsWUFBWSxHQUFHLDRCQUFZLFNBQ3hCLG1DQUFxQixHQUFDLHVDQUFpQjtZQUMxQyx1Q0FBaUIsRUFBQyx3Q0FBa0I7WUFDcEMsd0NBQWtCLEVBQUMsNkJBQW1CO1lBQ3RDLCtCQUFxQjtZQUNyQixpREFBc0IsRUFBQztRQUN2QixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3hCLFNBQVMsRUFBRTtZQUNOLCtCQUFXLEVBQUMsd0NBQW9CO1NBQ25DO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU0lERURSQVdFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTElTVFZJRVdfRElSRUNUSVZFUyB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXInO1xuaW1wb3J0IHsgRGlyZWNjaW9uSXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvZGlyZWNjaW9uL2RpcmVjY2lvbi1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmxvYXRCdG4zQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9kaXJlY2Npb24vZmxvYXQtYnRuLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmxvYXRCdG4yQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9zb2xpY2l0dWRlcy1saXN0YS9mbG9hdC1idG4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMaXN0SXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvc29saWNpdHVkZXMtbGlzdGEvbGlzdC1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmxvYXRCdG5Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy90ZXJtaW5vcy9mbG9hdC1idG4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZX0gZnJvbSBcIi4vcGFnZXMvc29saWNpdHVkZXMtbGlzdGEvZGlyZWNjaW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IERpcmVjY2lvbkl0ZW1TZXJ2aWNlfSBmcm9tIFwiLi9wYWdlcy9kaXJlY2Npb24vZGlyZWNjaW9uLnNlcnZpY2VcIjtcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudCxcbiAgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzLEZsb2F0QnRuQ29tcG9uZW50LFxuICBMaXN0SXRlbUNvbXBvbmVudCxGbG9hdEJ0bjJDb21wb25lbnQsXG4gIEZsb2F0QnRuM0NvbXBvbmVudCxMSVNUVklFV19ESVJFQ1RJVkVTLFxuICBTSURFRFJBV0VSX0RJUkVDVElWRVMsXG4gIERpcmVjY2lvbkl0ZW1Db21wb25lbnRdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEl0ZW1TZXJ2aWNlLERpcmVjY2lvbkl0ZW1TZXJ2aWNlXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9Il19