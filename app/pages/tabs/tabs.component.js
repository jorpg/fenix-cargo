"use strict";
var core_1 = require("@angular/core");
var DataItem = (function () {
    function DataItem(itemDesc) {
        this.itemDesc = itemDesc;
    }
    return DataItem;
}());
exports.DataItem = DataItem;
var TabsComponent = (function () {
    function TabsComponent() {
        this.items = new Array();
        for (var i = 0; i < 5; i++) {
            this.items.push(new DataItem("item " + i));
        }
    }
    return TabsComponent;
}());
TabsComponent = __decorate([
    core_1.Component({
        selector: "tab-view-test",
        templateUrl: "pages/tabs/tabs.html",
    }),
    __metadata("design:paramtypes", [])
], TabsComponent);
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW9GO0FBR3BGO0lBQ0ksa0JBQW1CLFFBQWdCO1FBQWhCLGFBQVEsR0FBUixRQUFRLENBQVE7SUFBRyxDQUFDO0lBQzNDLGVBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLDRCQUFRO0FBUXJCLElBQWEsYUFBYTtJQUd0QjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVksQ0FBQztRQUNuQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDTCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLGFBQWE7SUFKekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSxzQkFBc0I7S0FDdEMsQ0FBQzs7R0FDVyxhQUFhLENBU3pCO0FBVFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0LCBJbnB1dCAgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuXG5leHBvcnQgY2xhc3MgRGF0YUl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpdGVtRGVzYzogc3RyaW5nKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0YWItdmlldy10ZXN0XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdGFicy90YWJzLmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCB7XG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxEYXRhSXRlbT47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IG5ldyBBcnJheTxEYXRhSXRlbT4oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChuZXcgRGF0YUl0ZW0oXCJpdGVtIFwiICsgaSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19