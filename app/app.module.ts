import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule} from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";
import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui/listview/angular';

import { FloatBtn2Component} from "./pages/solicitudes-lista/float-btn.component";
import { ListItemComponent} from "./pages/solicitudes-lista/list-item.component";
import { FloatBtnComponent } from "./pages/terminos/float-btn.component";
import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
  imports: [
  NativeScriptModule,
  NativeScriptFormsModule,
  NativeScriptHttpModule,
  NativeScriptRouterModule,
  NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [AppComponent,
  ...navigatableComponents,FloatBtnComponent,
  ListItemComponent,FloatBtn2Component,
  LISTVIEW_DIRECTIVES,SIDEDRAWER_DIRECTIVES],
  bootstrap: [AppComponent]
})
export class AppModule {}