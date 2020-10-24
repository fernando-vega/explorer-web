import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServiceComponent } from './components/servicio/service.component';

const routes: Routes = [
  {
    path: '',
    component: ServiciosComponent
  },
  {
    path: ':title',
    component: ServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule {}
