import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/Counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DbzModule } from "./dbz/dbz.module";

//si tengo otro module siempre se agregara en los imports
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
