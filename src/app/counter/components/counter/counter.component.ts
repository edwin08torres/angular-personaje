import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="changeCounterBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  constructor() {}

  public title: string = 'Probando llevar este valor hacia el frontend';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += 1;
  }
  discreaseBy(): void {
    this.counter -= 1;
  }

  changeCounterBy(value: number): void {
    this.counter += value; // si se le pasa un numero negativo por obvias razones restaria
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
