import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

  private _personajes: Personaje[] = [
    {
      nombre: 'Gok',
      poder: 3232
    },
    {
      nombre: 'Veg',
      poder: 2323
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes]; // rompe la referencia
  }
  
  constructor(){
    //console.log('servicio...');
  }

  agregarPersonaje( personaje: Personaje ){
    this._personajes.push(personaje);
  }

}