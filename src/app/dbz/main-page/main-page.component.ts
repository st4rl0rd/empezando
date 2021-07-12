import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
  /*
  agregar (event:any){
    event.preventDefault();
    console.log(event);
  }
  */
  /*
  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }
  */

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  /*
  agregarNuevoPersonaje( argumento: Personaje){
    
    this.personajes.push(argumento);
  }
  */

  /*
  constructor( private dbzService: DbzService){
  }
  */
}
