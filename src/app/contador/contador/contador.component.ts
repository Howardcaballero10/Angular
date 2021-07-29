import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:`
    
    <h1>{{titulo}} </h1>
    <h2>La base es {{base}}</h2>
    
    <button (click)="acumular(-base)">- {{base}}</button>
    <span> {{numero}} </span>
    <button (click)="acumular(base )">+ {{base}}</button>
    `
})

export class ContadorComponent{ //ponemos export porque es lo vamos a ocupar despues
    titulo  : string = 'Bases';
    numero  : number = 10;
    base : number = 5;
  
    acumular(valor:number){
      this.numero += valor;
    }
}