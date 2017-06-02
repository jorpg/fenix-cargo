import {Component} from "@angular/core"


@Component({
selector:"aviso-pop",

    template:` 
    <StackLayout class="container">
    <Label text="Estas seguro que desea"></Label>
    <Label text="eliminar esta direccion ?"></Label>
    </StackLayout>
    `,
    styles: [` 
    .circle {
     color-background:#000000;
     }
    .container {
     color:#ffffff
     margin-right:20;
}`]

})
export class AvisoPopComponent{

}