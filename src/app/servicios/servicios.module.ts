import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServiceComponent } from './components/servicio/service.component';
import { ServiciosRoutingModule } from './servicios-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ServiciosComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    SharedModule
  ]
})
export class ServiciosModule { }
