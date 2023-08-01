import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

console.log(uuid());

@Injectable({
  providedIn: 'root'
})

export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name : "krilin",
      power : 1000
    },
    {
      id: uuid(),
      name : "goku",
      power : 9500
    },
    {
      id: uuid(),
      name: "Vegueta",
      power: 10000
    }
  ];


  public addCharacter(character: Character): void{
    const newCharacter: Character = {id: uuid(), ...character}
    this.characters.push(newCharacter);
  }

  public onDeleteCharacterById(id?: string): void{
    this.characters = this.characters.filter( chracter => chracter.id !== id);
  }
  constructor() { }

}
