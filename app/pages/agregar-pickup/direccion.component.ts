import {Component} from "@angular/core"


@Component({
selector:"direccion-popup",

    template:` 
    <StackLayout class="container">
    <StackLayout class="float-btn" orientation="horizontal">
    <Label class="circle" text="O"></Label>
    <Label text="Alias1"></Label>
    </StackLayout>
    <StackLayout class="float-btn" orientation="horizontal">
    <Label class="circle" text="O"></Label>
    <Label text="Alias2"></Label>
    </StackLayout>
    <StackLayout class="float-btn" orientation="horizontal">
    <Label class="circle" text="O"></Label>
    <Label text="Alias3"></Label>
    </StackLayout>
    <StackLayout class="float-btn" orientation="horizontal">
    <Label class="circle" text="O"></Label>
    <Label text="Alias4"></Label>
    </StackLayout>
    <StackLayout class="float-btn" orientation="horizontal">
    <Label class="circle" text="O"></Label>
    <Label text="Alias5"></Label>
    </StackLayout>
    <StackLayout class="float-btn" orientation="horizontal">
    <Label class="circle" text="O"></Label>
    <Label text="Alias6"></Label>
    </StackLayout>
    <StackLayout class="float-btn" orientation="horizontal">
    <Label class="circle" text="O"></Label>
    <Label text="Alias7"></Label>
    </StackLayout>
    </StackLayout>
    `,
    styles: [` 
    .circle {
     color:#1976D2;
     }
    .container {
       margin-right:20;
}`]

})
export class DireccionComponent{

}