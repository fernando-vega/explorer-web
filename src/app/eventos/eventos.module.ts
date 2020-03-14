import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './components/eventos/eventos.component';
import { EventosRoutingModule } from './eventos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EventoComponent } from './components/evento/evento.component';



@NgModule({
  declarations: [
    EventosComponent,
    EventoComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    SharedModule
  ]
})
export class EventosModule { }
