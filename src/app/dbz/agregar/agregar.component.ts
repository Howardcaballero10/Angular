import { Personaje } from './../interfaces/dbz.interface';

import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {


@Input() nuevo:Personaje = { //creamos un objeto con caracteristicas
  nombre: '',
  poder: 0
}

@Output() onNuevopersonaje: EventEmitter<Personaje> = new EventEmitter(); 

agregar(){

  if(this.nuevo.nombre.trim().length === 0 ){
    return;
  }
  console.log(this.nuevo);
  this.onNuevopersonaje.emit(this.nuevo);
  

  this.nuevo = {
  nombre: '',
  poder: 0}
  
}
}
