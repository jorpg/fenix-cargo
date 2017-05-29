"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var PerfilComponent = (function () {
    function PerfilComponent(router, page) {
        this.router = router;
    }
    PerfilComponent.prototype.guardar = function () {
        this.router.navigate(["/solicitudes-holder"]);
    };
    return PerfilComponent;
}());
PerfilComponent = __decorate([
    core_1.Component({
        selector: "perfil",
        templateUrl: "./pages/perfil/perfil.html",
        styleUrls: ["pages/perfil/perfil-common.css", "pages/perfil/perfil.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], PerfilComponent);
exports.PerfilComponent = PerfilComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlcmZpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLGdDQUE2QjtBQU03QixJQUFhLGVBQWU7SUFFdkIseUJBQW9CLE1BQWUsRUFBQyxJQUFTO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQVM7SUFFdEMsQ0FBQztJQUVILGlDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBQ0Qsc0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUMseUJBQXlCLENBQUM7S0FDMUUsQ0FBQztxQ0FHZ0MsZUFBTSxFQUFNLFdBQUk7R0FGckMsZUFBZSxDQVMzQjtBQVRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2V9IGZyb20gXCJ1aS9wYWdlXCJcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInBlcmZpbFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvcGVyZmlsL3BlcmZpbC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9wZXJmaWwvcGVyZmlsLWNvbW1vbi5jc3NcIixcInBhZ2VzL3BlcmZpbC9wZXJmaWwuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFBlcmZpbENvbXBvbmVudCB7XG5cbiAgICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIscGFnZTpQYWdlKXtcbiAgICBcbiAgfVxuXG5ndWFyZGFyKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NvbGljaXR1ZGVzLWhvbGRlclwiXSlcbn1cbn0iXX0=