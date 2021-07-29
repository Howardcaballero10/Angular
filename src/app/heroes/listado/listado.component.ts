import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
HeroeBorrado: string = '';

borrarHeroe(){
  //this.heroes.splice(1,1); //elimina el 1 elemento y cuantos apartir de ahi (1) qeu solo queremos que se borre ese mismo
  
  this.HeroeBorrado = this.heroes.shift() || ''; //elimina el primer elemento y manda un resultado
  
  
}

}
