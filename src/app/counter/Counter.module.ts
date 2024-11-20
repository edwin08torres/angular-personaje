import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';


// si yo deseo usar estos components fuera de su mundo, debo agregar el exports para poder usarlo por ejemplo  en el app.module.ts y los demas, para que no solo exista en counter, sino que fuera de ahi tambien, lo que ofrezca al mundo exterior

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
