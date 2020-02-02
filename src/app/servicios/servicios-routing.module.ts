import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServicioComponent } from './components/servicio/servicio.component';

const routes: Routes = [
  {
    path: '',
    component: ServiciosComponent
  },
  {
    path: ':id',
    component: ServicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule {}
