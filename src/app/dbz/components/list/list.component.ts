import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() //permite recibir datos en un componente desde su componente padre a travesa del biding
  // esto se marca como una propiedad de entrada es decir el characterList
  public characterList: Character[] = [
    // esto que esta aca es solo por defecto no es necesario tambien puede ir vacio o comentado a como se aprecia aca
    // {
    //   name: 'Trunks',
    //   power: 5000,
    // },
  ];

  //este mae es un emisor de eventos, el componente padre es el que recibe el evento y realiza una accion
  //en este caso seria un delete
  @Output()
  public onDeleteCharacterEmit: EventEmitter<string> = new EventEmitter();

  onDelete(id?: string): void {
    if (!id) return;

    console.log('ID: ', id);

    this.onDeleteCharacterEmit.emit(id);
  }

  // onDeleteCharacter(index: number): void {
  //   //Emitir el ID del personaje
  //   console.log(index);
  // }

  @Input() title!: string;
}
