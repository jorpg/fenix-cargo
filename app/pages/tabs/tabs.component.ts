import { Component,  ChangeDetectionStrategy, OnInit, Input  } from "@angular/core";
import { ObservableArray } from "data/observable-array";

export class DataItem {
    constructor(public itemDesc: string) {}
}

@Component({
    selector: "tab-view-test",
    templateUrl: "pages/tabs/tabs.html",
})
export class TabsComponent {
    public items: Array<DataItem>;

    constructor() {
        this.items = new Array<DataItem>();
        for (let i = 0; i < 5; i++) {
            this.items.push(new DataItem("item " + i));
        }
    }
}
