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
            direccion_service_1.ItemService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGtEQUFrRTtBQUNsRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLHNFQUFtRjtBQUNuRixvRUFBK0U7QUFDL0UsdUZBQW1GO0FBQ25GLDZFQUEwRTtBQUMxRSxxRkFBa0Y7QUFDbEYscUZBQWlGO0FBQ2pGLDRFQUF5RTtBQUN6RSxpREFBK0M7QUFDL0MsNkNBQThEO0FBQzlELGlGQUF5RTtBQW9CekUsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBbkJyQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDVCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLDZCQUFzQjtZQUN0QixpQ0FBd0I7WUFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7U0FDdkM7UUFDRCxZQUFZLEdBQUcsNEJBQVksU0FDeEIsbUNBQXFCLEdBQUMsdUNBQWlCO1lBQzFDLHVDQUFpQixFQUFDLHdDQUFrQjtZQUNwQyx3Q0FBa0IsRUFBQyw2QkFBbUI7WUFDdEMsK0JBQXFCO1lBQ3JCLGlEQUFzQixFQUFDO1FBQ3ZCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDeEIsU0FBUyxFQUFFO1lBQ04sK0JBQVc7U0FDZDtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTSURFRFJBV0VSX0RJUkVDVElWRVMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IExJU1RWSUVXX0RJUkVDVElWRVMgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9saXN0dmlldy9hbmd1bGFyJztcclxuaW1wb3J0IHsgRGlyZWNjaW9uSXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvZGlyZWNjaW9uL2RpcmVjY2lvbi1pdGVtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGbG9hdEJ0bjNDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2RpcmVjY2lvbi9mbG9hdC1idG4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZsb2F0QnRuMkNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvc29saWNpdHVkZXMtbGlzdGEvZmxvYXQtYnRuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaXN0SXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvc29saWNpdHVkZXMtbGlzdGEvbGlzdC1pdGVtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGbG9hdEJ0bkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3Rlcm1pbm9zL2Zsb2F0LWJ0bi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlfSBmcm9tIFwiLi9wYWdlcy9zb2xpY2l0dWRlcy1saXN0YS9kaXJlY2Npb24uc2VydmljZVwiO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LFxyXG4gIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50cyxGbG9hdEJ0bkNvbXBvbmVudCxcclxuICBMaXN0SXRlbUNvbXBvbmVudCxGbG9hdEJ0bjJDb21wb25lbnQsXHJcbiAgRmxvYXRCdG4zQ29tcG9uZW50LExJU1RWSUVXX0RJUkVDVElWRVMsXHJcbiAgU0lERURSQVdFUl9ESVJFQ1RJVkVTLFxyXG4gIERpcmVjY2lvbkl0ZW1Db21wb25lbnRdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEl0ZW1TZXJ2aWNlXHJcbiAgICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9Il19