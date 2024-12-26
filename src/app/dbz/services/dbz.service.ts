import { Injectable } from '@angular/core';
import { Character } from '../interface/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9100,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };

    this.characters.push(newCharacter);
  }

  //lo cual la accion es esta, con el uso de la funcion splice, eliminamos propiedades del array ¿como sabes cual si?, con la ayuda de la info que envia el hijo proviniendo del @output, este es el que te manda el id, y a cual debes eliminar
  // onDeleteCharacter(characterID: number): void {
  //   this.characters.splice(characterID, 1);
  // }

  onDeleteCharacterById(characterID: string) {
    this.characters = this.characters.filter((c) => c.id !== characterID);
    console.log('Characteres restantes', this.characters);
  }
}
