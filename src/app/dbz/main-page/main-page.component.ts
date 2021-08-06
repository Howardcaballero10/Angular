import { DvzService } from './../services/dbz.service';

import { AgregarComponent } from './../agregar/agregar.component';
import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  personajes: Personaje [] = [
    {
      nombre: 'goku',
      poder: 14000
    },
    {
      nombre: 'vegeta',
      poder: 9000
    }
  ]; //declaramos un arreglo

  nuevo: Personaje = {
    nombre:'Frizer',
    poder: 13000
  }

  agregarNuevoPersonaje(argumento:Personaje){
    //debugger; //Esto te sirve para poder hacer un breakpoint en el navegador
    this.personajes.push(argumento);
  }

  constructor(private DvzService:DvzService){
  }
}
