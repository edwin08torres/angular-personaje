import { Component } from '@angular/core';
import { Character } from '../interface/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

//evitar a toda costa el uso de 'any' debido a que perdemos poder sobre ts
export class MainPageComponent {
  //aca inyectamos el servicio
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

  miTitulo = 'Menu de personajes';
}
