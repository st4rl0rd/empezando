import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['aaa','bbb','ccc','ddd','fff'];
  elemento: string = '';

  borrarElemento(){
    //this.heroes.pop();
    this.elemento = this.heroes.shift() || '';
    //console.log(elemento);
  }

}
