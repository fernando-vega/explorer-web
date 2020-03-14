import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './components/eventos/eventos.component';
import { EventoComponent } from './components/evento/evento.component';

const routes: Routes = [
  {
    path: '',
    component: EventosComponent
  },
  {
    path: ':title',
    component: EventoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule {}
