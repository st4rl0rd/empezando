import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

  personajes: Personaje[] = [
    {
      nombre: 'Gok',
      poder: 3232
    },
    {
      nombre: 'Veg',
      poder: 2323
    }
  ];
  
  constructor(){
    console.log('servicio...');
  }
}