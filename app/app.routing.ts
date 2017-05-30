import { LoginComponent } from "./pages/login/login.component";
import { SolicitudesHolderComponent } from "./pages/solicitudes-holder/solicitudes-holder.component";
import { InicioSesionComponent} from "./pages/inicioSesion/inicioSesion.component";
import { RecuperarComponent} from "./pages/recuperar/recuperar.component";
import { IngresarCodigoComponent} from "./pages/ingresarCodigo/ingresarCodigo.component"
import { BienvenidaComponent} from "./pages/bienvenida/bienvenida.component";
import { PerfilComponent} from "./pages/perfil/perfil.component";
import { RegistrarseComponent} from "./pages/registrarse/registrarse.component"; 
import { TerminosComponent} from "./pages/terminos/terminos.component";
import { SolicitudesListaComponent} from "./pages/solicitudes-lista/solicitudes-lista.component";
import { DetallesItemComponent} from "./pages/detalles-item/detalles-item.component";
import { AgregarPickUpComponent} from "./pages/agregar-pickup/agregar-pickup.component";

export const routes = [
    { path: "", component: LoginComponent},
    { path: "solicitudes-holder",component: SolicitudesHolderComponent },
    { path: "inicioSesion",component:InicioSesionComponent },
    { path: "recuperar",component:RecuperarComponent},
    { path: "ingresarCodigo",component:IngresarCodigoComponent},
    { path: "bienvenida",component:BienvenidaComponent},
    { path: "perfil",component:PerfilComponent},
    { path: "registrarse",component:RegistrarseComponent},
    { path: "terminos",component:TerminosComponent},
    { path: "solicitudes-lista",component:SolicitudesListaComponent},
    { path: "detalles-item",component:DetallesItemComponent},
    { path: "agregar-pickup",component:AgregarPickUpComponent}
];

export const navigatableComponents = [
    LoginComponent,SolicitudesHolderComponent,InicioSesionComponent,
    RecuperarComponent,IngresarCodigoComponent,BienvenidaComponent,
    PerfilComponent,RegistrarseComponent,TerminosComponent,
    SolicitudesListaComponent,DetallesItemComponent,AgregarPickUpComponent
];