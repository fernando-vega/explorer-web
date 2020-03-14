import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { AlquilerRoutingModule } from './alquiler-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    AlquilerComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    AlquilerRoutingModule,
    SharedModule
  ]
})
export class AlquilerModule { }
