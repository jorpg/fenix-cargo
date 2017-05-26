import { AuthComponent } from "./pages/auth/auth.component";
import { LoginComponent } from "./pages/login/login.component";
import { PassComponent } from "./pages/pass/pass.component";
import { CodeComponent } from "./pages/code/code.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ListComponent } from "./pages/list/list.component";
import { TabsComponent } from "./pages/tabs/tabs.component";

export const routes = [
    { path: "", component: AuthComponent },
    { path: "login", component: LoginComponent },
    { path: "pass", component: PassComponent },
    { path: "code", component: CodeComponent },
    { path: "register", component: RegisterComponent },
    { path: "list", component: ListComponent },
    { path: "tabs", component: TabsComponent }
];

export const navigatableComponents = [
    AuthComponent,
    LoginComponent,
    PassComponent,
    CodeComponent,
    RegisterComponent,
    ListComponent,
    TabsComponent
];